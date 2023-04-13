import React from "react"
import CourseCard from "./Coursecards"
import OnlineCourses from "./OnlineCourses"
import Header from "./Head"
import Navbar from "./Navbar"
const CourseHome = () => {
  return (
    <>
      <Navbar/>
      <CourseCard />
      <OnlineCourses />
    </>
  )
}

export default CourseHome