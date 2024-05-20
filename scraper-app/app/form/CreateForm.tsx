"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import axios from "axios"

export default function CreateForm() {
    // def search_classes(session = "", subject = "", match_type = "", match_id = "", career = ""):

    const router = useRouter()

    const submitHandler = async (e : any) => {
        e.preventDefault()
        setIsLoading(true)

        const data = {
            session,
            subject,
            matchType,
            matchID,
            career
        }

        const response = await axios.post('http://localhost:5000/', data)

        setClasses(response.data)

        console.log(response.data)
        setIsLoading(false)
    }

    const [session, setSession] = useState('')
    const [subject, setSubject] = useState('')
    const [matchType, setMatchType] = useState('')
    const [matchID, setMatchID] = useState('')
    const [career, setCareer] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [classes, setClasses] = useState([])

    return (<>
    
        <form className="w-1/2 flex flex-col">
            <label className="flex justify-evenly">
                <span className="m-[auto]">Session:</span>
                <input
                   className="text-[#000]" 
                    required
                    type="text"
                    onChange={(e) => setSession(e.target.value)}
                    value={session}
                />
            </label>
            <label className="flex justify-evenly">
                <span className="m-[auto]">Subject:</span>
                <input
                    className="text-[#000]" 
                    required
                    type="text"
                    onChange={(e) => setSubject(e.target.value)}
                    value={subject}
                />
            </label>
            <label className="flex justify-evenly">
                <span className="m-[auto]">Match Type:</span>
                <input
                    className="text-[#000]" 
                    required
                    type="text"
                    onChange={(e) => setMatchType(e.target.value)}
                    value={matchType}
                />
            </label>
            <label className="flex justify-evenly">
                <span className="m-[auto]">MatchID:</span>
                <input
                    className="text-[#000]" 
                    required
                    type="text"
                    onChange={(e) => setMatchID(e.target.value)}
                    value={matchID}
                />
            </label>
            <label className="flex justify-evenly">
                <span className="m-[auto]">Career:</span>
                <input
                    className="text-[#000]" 
                    required
                    type="text"
                    onChange={(e) => setCareer(e.target.value)}
                    value={career}
                />
            </label>
            <button
                className="btn-primary"
                disabled={isLoading}
                onClick={submitHandler}
            >
                {isLoading && <span className="m-[auto]">Searching...</span>}
                {!isLoading && <span className="m-[auto]">Search Class</span>}
            </button>

        </form>
        <div>
            { classes && classes.map((c : any) => {
                return (
                    <div key={c.class} className="flex">
                        <div>{c.section}</div>
                        <div>{c.day_times}</div>
                        <div>{c.room}</div>
                        <div>{c.instructor}</div>
                        <div>{c.instructorDes}</div>

                    </div>
                )
            }) }
        </div>
    </>
    )
}
