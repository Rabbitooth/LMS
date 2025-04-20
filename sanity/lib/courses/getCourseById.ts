import { sanityFetch } from "../live";
import { defineQuery } from "groq";

async function getCourseById(id: string) {
  const getCourseByIdQuery =
    defineQuery(`*[_type == "course" && _id == $id][0] {
      ...,  
      "category": category->{...},  
      "instructor": instructor->{...},  
      "modules": modules[]-> {  
        ...,  
        "lessons": lessons[]-> {...}  
      }
    }`);

  const course = await sanityFetch({
    query: getCourseByIdQuery,
    params: { id },
  });

  // Return just the data portion of the response
  return course.data;
}

export default getCourseById;
