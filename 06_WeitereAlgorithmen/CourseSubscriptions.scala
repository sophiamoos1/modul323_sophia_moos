
case class Course(title: String, students: List[String])

val courses = List(
    Course("M323", List("Peter", "Petra", "Paul", "Paula")),
    Course("M183", List("Paula", "Franz", "Franziska")),
    Course("M117", List("Paul", "Paula")),
    Course("M114", List("Petra", "Paul", "Paula")),
)

case class CourseSubscriptions(title: String, totalStudents: Int)

val courseSubscriptions = courses.map(course => 
    CourseSubscriptions(course.title, course.students.size)
)

courseSubscriptions.foreach(println)
