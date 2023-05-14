import { XlogPost, XlogUser } from "../types";

export async function getUserCharacterId(name: string)  {
  const response = await fetch(`https://indexer.crossbell.io/v1/handles/${name}/character`)
  const json = await response.json() as XlogUser
  return json.characterId
}

export async function getRecentPosts(characterId: number) {
  const response = await fetch(`https://indexer.crossbell.io/v1/notes?characterId=${characterId}&sources=xlog&tags=post&limit=5`)
  const json = await response.json() as {list: XlogPost[]}
  return json.list
}

