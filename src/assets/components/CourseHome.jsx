import React from "react"
import CourseCard from "./Coursecards"
import OnlineCourses from "./OnlineCourses"
import Header from "./Head"
const CourseHome = () => {
  return (
    <>
      <Header />
      <CourseCard />
      <OnlineCourses />
    </>
  )
}

export default CourseHome
