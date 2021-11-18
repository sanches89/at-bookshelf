export async function getBooks() {
  const res = await fetch(
    'https://us-central1-all-turtles-interview.cloudfunctions.net/books',
  )

  return res.json()
}
