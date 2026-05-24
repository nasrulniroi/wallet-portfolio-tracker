CREATE TABLE IF NOT EXISTS records (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  value DECIMAL(20,8),
  category VARCHAR(100),
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS snapshots (
  id SERIAL PRIMARY KEY,
  record_id INTEGER REFERENCES records(id),
  value DECIMAL(20,8),
  snapshot_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS alerts (
  id SERIAL PRIMARY KEY,
  record_id INTEGER REFERENCES records(id),
  type VARCHAR(50) NOT NULL,
  threshold DECIMAL(20,8),
  triggered BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_records_category ON records(category);
CREATE INDEX idx_snapshots_record ON snapshots(record_id);
CREATE INDEX idx_alerts_triggered ON alerts(triggered);
