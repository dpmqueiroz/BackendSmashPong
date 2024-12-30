import app from "./config/App"

const PORT = process.env.PORT || 3333

app.listen(PORT, () => console.log(`Listening at http://[::]:${PORT}`))