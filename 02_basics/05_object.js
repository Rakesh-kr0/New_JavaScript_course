// object destructring

const course={
    coursename:"js hindi ",
    price: "999",
    courseInstructor:"Rakesh"
}
 
// course.courseInstructor


const {courseInstructor} =course;
console.log(courseInstructor);//

const {courseInstructor:instructor}=course;
console.log(instructor)//change 

//api in object

