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
            <label className="mt-5 flex justify-evenly">
                <span className="m-[auto]">Session:</span>
                <select onChange={(e) => setSession(e.target.value)} className="text-[#000] w-[50%]">
                    <option value="">Select session type</option>
                    <option value="1">Regular Academic Session</option>
                    <option value="2">Session 2</option>
                    <option value="3">Session 3</option>
                    <option value="4">Session 4</option>
                    <option value="5">Session 5</option>
                    <option value="6">Session 6</option>
                </select>
            </label>
            <label className="mt-5 flex justify-evenly">
                <span className="m-[auto]">Subject:</span>
                <select onChange={(e) => setSubject(e.target.value)} className='text-[#000] w-[50%]'>
                    <option value="">Select one subject</option>
                    <option value="AAMS">AAMS (Asian American Studies)</option>
                    <option value="AAS">AAS (African American Studies)</option>
                    <option value="ACCT">ACCT (Accounting)</option>
                    <option value="AFSC">AFSC (Air Force Science)</option>
                    <option value="ANTH">ANTH (Anthropology)</option>
                    <option value="ARAB">ARAB (Arabic)</option>
                    <option value="ARAF">ARAF (Architect Affiliated St)</option>
                    <option value="ARCH">ARCH (Architecture)</option>
                    <option value="ARED">ARED (Art Education)</option>
                    <option value="ARLD">ARLD (Arts Leadership)</option>
                    <option value="ARTH">ARTH (Art History)</option>
                    <option value="ARTS">ARTS (Studio Art &amp; Art Hist)</option>
                    <option value="ASLI">ASLI (Amer Sign Lang Interpre)</option>
                    <option value="ATP">ATP (Athletic Training Progr)</option>
                    <option value="BCHS">BCHS (Biochemical&amp;Biophys Sci)</option>
                    <option value="BCIS">BCIS (Busn Computer Info Syst)</option>
                    <option value="BIOE">BIOE (Biomedical Engineering)</option>
                    <option value="BIOL">BIOL (Biology)</option>
                    <option value="BTEC">BTEC (Biotechnology)</option>
                    <option value="BUAF">BUAF (Business Affiliated St)</option>
                    <option value="BURE">BURE (Business Reciprocal Exc)</option>
                    <option value="BUSI">BUSI (Business)</option>
                    <option value="BZAN">BZAN (Business Analytics)</option>
                    <option value="CAAF">CAAF (CotA Affiliated Studies)</option>
                    <option value="CEA">CEA (Computer Engr Analytics)</option>
                    <option value="CHEE">CHEE (Chemical Engineering)</option>
                    <option value="CHEM">CHEM (Chemistry)</option>
                    <option value="CHIN">CHIN (Chinese Language)</option>
                    <option value="CIS">CIS (Computer Information Sys)</option>
                    <option value="CIVE">CIVE (Civil &amp; Environm Engr)</option>
                    <option value="CLAS">CLAS (Classics)</option>
                    <option value="CNE">CNE (Construction Engineering)</option>
                    <option value="CNST">CNST (Construction Technology)</option>
                    <option value="COMD">COMD (Communication Disorders)</option>
                    <option value="COMM">COMM (Communication)</option>
                    <option value="COOP">COOP (Cooperative Engineering)</option>
                    <option value="COSC">COSC (Computer Science)</option>
                    <option value="CUIN">CUIN (Curriculum&amp; Instruction)</option>
                    <option value="CUST">CUST (Cultural&amp; Urban Studies)</option>
                    <option value="DANC">DANC (Dance)</option>
                    <option value="DIGM">DIGM (Digital Media)</option>
                    <option value="DRAM">DRAM (Drama)</option>
                    <option value="ECE">ECE (Electrical and Comp Engr)</option>
                    <option value="ECON">ECON (Economics)</option>
                    <option value="EDBA">EDBA (Executive DBA)</option>
                    <option value="EDRS">EDRS (Educational Research)</option>
                    <option value="EDS">EDS (Engr Data Science)</option>
                    <option value="EDUC">EDUC (Education)</option>
                    <option value="EGRP">EGRP (Engineering PROMES)</option>
                    <option value="ELCS">ELCS (Educ Ldrshp&amp;Cultural St)</option>
                    <option value="ELED">ELED (Elementary Education)</option>
                    <option value="ELET">ELET (Electrical-Electron Tec)</option>
                    <option value="ENGI">ENGI (Engineering)</option>
                    <option value="ENGL">ENGL (English)</option>
                    <option value="ENGR">ENGR (Engineering)</option>
                    <option value="ENRG">ENRG (Energy &amp; Sustainability)</option>
                    <option value="ENTR">ENTR (Entrepreneurship)</option>
                    <option value="FINA">FINA (Finance)</option>
                    <option value="FORE">FORE (Foresight)</option>
                    <option value="FREN">FREN (French)</option>
                    <option value="GENB">GENB (General Business Admin)</option>
                    <option value="GEOL">GEOL (Geosciences)</option>
                    <option value="GERM">GERM (German)</option>
                    <option value="GOVT">GOVT (Government)</option>
                    <option value="GREK">GREK (Greek)</option>
                    <option value="GRET">GRET (Global Retailing)</option>
                    <option value="GHL">Global Hospitality Leadership</option>
                    <option value="HDCS">HDCS (Hum Develop &amp; Consum Sc)</option>
                    <option value="HDFS">HDFS (Hum Develop &amp; Fam Stds)</option>
                    <option value="HISP">HISP (Hispanic Studies)</option>
                    <option value="HIST">HIST (History)</option>
                    <option value="HLT">HLT (Health Education)</option>
                    <option value="HON">HON (Honors College)</option>
                    <option value="HRAF">HRAF (HRM Affiliated Studies)</option>
                    <option value="HRD">HRD (Human Resources Developm)</option>
                    <option value="HRRE">HRRE (HRM Reciprocal Exc)</option>
                    <option value="IART">IART (Interdisciplinary Art)</option>
                    <option value="IDNS">IDNS (Interdisciplinary-NSM)</option>
                    <option value="IEEM">IEEM (Engineering Management)</option>
                    <option value="ILAS">ILAS (Interdisciplinary-LASS)</option>
                    <option value="INAR">INAR (Interior Arch)</option>
                    <option value="INDE">INDE (Industrial Engineering)</option>
                    <option value="INDI">INDI (India Studies)</option>
                    <option value="INDS">INDS (Industrial Design)</option>
                    <option value="INTB">INTB (International Business)</option>
                    <option value="INTN">INTN(Interpreting &amp; Translatn)</option>
                    <option value="IRW">IRW (Integ Reading &amp; Writing)</option>
                    <option value="ITAL">ITAL (Italian)</option>
                    <option value="JAPN">JAPN (Japanese Language)</option>
                    <option value="JWST">JWST (Jewish Studies)</option>
                    <option value="KIN">KIN (Kinesiology)</option>
                    <option value="KORE">KORE (Korean)</option>
                    <option value="LAAF">LAAF (Law Affiliated Studies)</option>
                    <option value="LACP">LACP(Liberal Arts Career Plan)</option>
                    <option value="LATI">LATI (Latin Language)</option>
                    <option value="LAW">LAW (Law)</option>
                    <option value="LSAF">LSAF (LASS Affiliated Studies)</option>
                    <option value="LSRE">LSRE (LASS Reciprocal Exc)</option>
                    <option value="LST">LST(Legal Studies)</option>
                    <option value="MANA">MANA (Management)</option>
                    <option value="MARK">MARK (Marketing and Entrepren)</option>
                    <option value="MAS">MAS (Mexican Am Studies)</option>
                    <option value="MATH">MATH (Mathematics)</option>
                    <option value="MECE">MECE (Mechanical Engineering)</option>
                    <option value="MECT">MECT (Mechanical Technology)</option>
                    <option value="MEDI">MEDI (Medicine)</option>
                    <option value="MIS">MIS (Management Info. Systems)</option>
                    <option value="MSCI">MSCI (Military Science)</option>
                    <option value="MTLS">MTLS (Materials Engineering)</option>
                    <option value="MUED">MUED (Music Education)</option>
                    <option value="MUSA">MUSA (Applied Music)</option>
                    <option value="MUSI">MUSI (Music)</option>
                    <option value="MUTX">MUTX (Music Therapy)</option>
                    <option value="NAVY">NAVY (Navy)</option>
                    <option value="NSAF">NSAF (NSM Affiliated Studies)</option>
                    <option value="NSS">NSS(National Security Studies)</option>
                    <option value="NURS">NURS (Nursing)</option>
                    <option value="NUTR">NUTR (Nutrition)</option>
                    <option value="OPTO">OPTO (Optometry)</option>
                    <option value="PCEU">PCEU (Pharmaceutics)</option>
                    <option value="PCOL">PCOL (Pharmacology)</option>
                    <option value="PEP">PEP (Physical Ed Professional)</option>
                    <option value="PETR">PETR (Petroleum Engineering)</option>
                    <option value="PHAR">PHAR (Pharmacy)</option>
                    <option value="PHCA">PHCA (Pharmacy Practice)</option>
                    <option value="PHED">PHED (Physical Education)</option>
                    <option value="PHIL">PHIL (Philosophy)</option>
                    <option value="PHLA">PHLA (Pharm Leadership Admin)</option>
                    <option value="PHLS">PHLS (Psych Hlth Learn Sci)</option>
                    <option value="PHOP">PHOP (Physiological Optics)</option>
                    <option value="PHYS">PHYS (Physics)</option>
                    <option value="POLC">POLC (Public Policy)</option>
                    <option value="POLS">POLS (Political Science)</option>
                    <option value="POPH">POPH (Population Health)</option>
                    <option value="PSYC">PSYC (Psychology)</option>
                    <option value="PUBL">PUBL (Public Administration)</option>
                    <option value="QSS">QSS (Quantitative Social Sci)</option>
                    <option value="RELS">RELS (Religious Studies)</option>
                    <option value="SAAF">SAAF (Affiliated Studies Grad)</option>
                    <option value="SAER">SAER (Systems Anal &amp; Ed Res)</option>
                    <option value="SARE">SARE(Reciprocal Exchange Grad)</option>
                    <option value="SCLT">SCLT (Supply Chain Logis Tech)</option>
                    <option value="SCM">SCM (Supply Chain Mgmt)</option>
                    <option value="SEDE">SEDE (Secondary Education)</option>
                    <option value="SGNL">SGNL (American Sign Language)</option>
                    <option value="SOC">SOC (Sociology)</option>
                    <option value="SOCI">SOCI (Sociology)</option>
                    <option value="SOCW">SOCW (Social Work)</option>
                    <option value="SPAC">SPAC (Space Architecture)</option>
                    <option value="SPAN">SPAN (Spanish)</option>
                    <option value="SPCH">SPCH (Speech)</option>
                    <option value="SPEC">SPEC (Special Populations)</option>
                    <option value="STAT">STAT (Statistics)</option>
                    <option value="SUBS">SUBS (Subsea Engineering)</option>
                    <option value="SYSE">SYSE (Systems Engineering)</option>
                    <option value="TEAF">TEAF (TECH Affiliated Studies)</option>
                    <option value="TECH">TECH (Technology)</option>
                    <option value="TEPM">TEPM (Technology Project Mgt)</option>
                    <option value="THEA">THEA (Theatre)</option>
                    <option value="TLIM">TLIM (Tech Leadersh&amp;Innov Mgt)</option>
                    <option value="TMTH">TMTH (Technical Mathematics)</option>
                    <option value="UNIV">UNIV (University Studies)</option>
                    <option value="USS">USS (Undergrad Student Success</option>
                    <option value="VIET">VIET (Vietnamese)</option>
                    <option value="WCL">WCL (World Cultures&amp; Lit)</option>
                    <option value="WGSS">WGSS (WomenGendSexualitySt)</option>
                </select>
            </label>
            <label className="mt-5 flex justify-evenly">
                <span className="m-[auto]">Match Type:</span>
                <select onChange={(e) => setMatchType(e.target.value)} className='text-[#000] w-[50%]'>
                    <option value="">Select a match type</option>
                    <option value="C">contains</option>
                    <option value="G">greater than or equal to</option>
                    <option value="E">is exactly</option>
                    <option value="T">less than or equal to</option>
                </select>
            </label>
            <label className="mt-5 flex justify-evenly">
                <span className="m-[auto]">MatchID:</span>
                <input
                    className="text-[#000] w-[50%]" 
                    required
                    type="text"
                    onChange={(e) => setMatchID(e.target.value)}
                    placeholder="Enter a course ID"
                    value={matchID}
                />
            </label>
            <label className="mt-5 flex justify-evenly">
                <span className="m-[auto]">Career:</span>
                <select className="text-[#000] w-[50%]" onChange={(e) => setCareer(e.target.value)}>
                    <option value="">Select a career type</option>
                    <option value="GRAD">Graduate</option>
                    <option value="LAW">Law</option>
                    <option value="MED">Medicine</option>
                    <option value="OPT">Optometry</option>
                    <option value="PHRM">Pharmacy</option>
                    <option value="UGRD">Undergraduate</option>
                </select>
            </label>
            <button
                className="btn-primary mt-5"
                disabled={isLoading}
                onClick={submitHandler}
            >
                {isLoading && <span className="m-[auto]">Searching...</span>}
                {!isLoading && <span className="m-[auto]">Search Class</span>}
            </button>

        </form>
        <div className="flex flex-col">
            { classes && classes.map((c : any) => {
                return (
                    <div key={c.class} className="flex mt-5 text-[14px] justify-evenly">

                        <div className="w-5%">{c.section}</div>
                        <div className="w-5%">{c.day_times}</div>
                        <div className="w-5%">{c.room}</div>
                        <div className="w-5%">{c.instructor}</div>
                        <div className="w-[20%]">{c.instructorDesc}</div>

                    </div>
                )
            }) }
        </div>
    </>
    )
}
