import { Club, Clubs, Match, Matches } from './types'

const clubs: Clubs = require('../data/clubs.json')
const results: Matches = require('../data/results.json')

export function getClub(code: string): string {
    const club = clubs.clubs.find(club => club.code === code)
    if (!club) {
        throw new Error("Club not found")
    }
    return club.name
}

export function getResult(team1: string, team2: string): Match {
    const match = results.matches.find(match => {
        return team1 === match.team1 && team2 === match.team2
    })
    if (!match) {
        throw new Error("Match not found")
    }
    return match
}
