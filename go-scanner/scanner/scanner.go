package scanner

import (
	"encoding/json"
	"log"
	"time"
)

type Block struct {
	Number    uint64    `json:"number"`
	Timestamp time.Time `json:"timestamp"`
	TxCount   int       `json:"tx_count"`
}

func Scan(rpcURL string, startBlock uint64) ([]Block, error) {
	log.Printf("Scanning from block %d", startBlock)
	return nil, nil
}
