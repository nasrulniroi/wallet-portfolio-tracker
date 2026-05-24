package scanner

import "os"

type Config struct {
	RPCURL  string
	ChainID int
}

func LoadConfig() Config {
	return Config{
		RPCURL:  getEnv("RPC_URL", "https://eth-mainnet.g.alchemy.com/v2/YOUR_KEY"),
		ChainID: 1,
	}
}

func getEnv(key, def string) string {
	if v := os.Getenv(key); v != "" {
		return v
	}
	return def
}
