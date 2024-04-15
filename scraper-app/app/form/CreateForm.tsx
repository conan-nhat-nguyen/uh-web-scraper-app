"use client"

import { useRouter } from "next/router"
import { useState } from "react"

export default function CreateForm() {

    const [session, setSession] = useState('')
    const [subject, setSubject] = useState('')
    const [courseNumber, setCourseNumber] = useState('')
    const [startingTime, setStartingTime] = useState('')
    const [endingTime, setEndingTime] = useState('')
    const [dayOfWeek, setDayOfWeek] = useState('')
    const [instructorLastName, setInstructorLastName] = useState('')
    const [mode, setMode] = useState('')

    return (
        <h1>This is a form</h1>
    )
}
