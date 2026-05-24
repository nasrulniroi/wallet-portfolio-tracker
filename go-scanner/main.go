package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
)

func main() {
	rpc := os.Getenv("RPC_URL")
	if rpc == "" {
		rpc = "https://eth-mainnet.g.alchemy.com/v2/YOUR_KEY"
	}
	log.Printf("Scanner starting, RPC: %s...", rpc[:30])

	http.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(map[string]string{"status": "ok"})
	})
	http.HandleFunc("/api/scan", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(map[string]interface{}{"scanning": true, "blocks": 0})
	})

	fmt.Println("Scanner API on :8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
