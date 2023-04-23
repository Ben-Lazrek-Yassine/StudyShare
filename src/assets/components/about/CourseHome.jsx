import React from "react"
import CoursesCard from "./CoursesCard"
import OnlineCourses from "./OnlineCourses"
import Navbar from "../Navbar"
const CourseHome = () => {
  return (
    <>
      <Navbar />
      <CoursesCard />
      <OnlineCourses />
    </>
  )
}

export default CourseHome
