"use server"

const BASE_URL = "https://shikimori.one/api/animes"

export const fetchAnime = async (page: number, limit: number) => {
  const response = await fetch(`${BASE_URL}?page=${page}&limit=${limit}&order=popularity`)

  return await response.json()
}