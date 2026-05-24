INSERT INTO records (name, value, category) VALUES
  ('Sample A', 100.50, 'primary'),
  ('Sample B', 200.75, 'secondary'),
  ('Sample C', 300.25, 'primary')
ON CONFLICT DO NOTHING;
