"use client"

import { useRouter } from "next/router"
import { useState } from "react"

export default function CreateForm() {
    // def search_classes(session = "", subject = "", match_type = "", match_id = "", career = ""):

    const [session, setSession] = useState('')
    const [subject, setSubject] = useState('')
    const [matchType, setMatchType] = useState('')
    const [matchID, setMatchID] = useState('')
    const [career, setCareer] = useState('')
    
    return (
        <h1>This is a form</h1>
    )
}
