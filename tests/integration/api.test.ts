describe('API', () => {
  test('health endpoint returns ok', async () => {
    const res = await fetch('http://localhost:3000/api/health')
    expect(res.status).toBe(200)
    const data = await res.json()
    expect(data.status).toBe('ok')
  })
})
