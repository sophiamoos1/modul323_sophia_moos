
case class Course(title: String, students: List[String])

val courses = List(
    Course("M323", List("Peter", "Petra", "Paul", "Paula")),
    Course("M183", List("Paula", "Franz", "Franziska")),
    Course("M117", List("Paul", "Paula")),
    Course("M114", List("Petra", "Paul", "Paula")),
)

// Find modules attended by Peter
val peterModules = courses
    .filter(_.students.contains("Peter"))
    .map(_.title)
    .mkString(", ")
println(s"Peter besucht folgende Module: $peterModules")

// Find modules attended by Petra
val petraModules = courses
    .filter(_.students.contains("Petra"))
    .map(_.title)
    .mkString(", ")
println(s"Petra besucht folgende Module: $petraModules")
