"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

type Group = {
  id: number
  name: string
  active: boolean
}

type Student = {
  id: number
  fullname: string
  age: number
  email: string
  active: boolean
  group_id: number
}

function groups() {

const [groups, setGroups] = useState<Group[]>([])
const [students, setStudents] = useState<Student[]>([])
const [selectedGroupId, setSelectedGroupId] = useState<number | null>(null)
const [search, setSearch] = useState("")
  return (
    <div>groups</div>
  )
}

export default groups