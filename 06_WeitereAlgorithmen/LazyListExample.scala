
import scala.util.Random
import cats.effect.IO
import cats.effect.unsafe.implicits.global

// Example 1: LazyList repeating elements
val example1 = LazyList.continually(1).take(3).toList
println(s"Example 1: $example1") // Produces List(1, 1, 1)

// Example 2: LazyList appending and repeating
val example2 = LazyList(1).lazyAppendedAll(LazyList.continually(0, 1).flatten).take(4).toList
println(s"Example 2: $example2") // Produces List(1, 0, 1, 0)

// Example 3: LazyList with map and repeat
val example3 = LazyList(2).map(_ * 13).take(1).toList
println(s"Example 3: $example3") // Produces List(26)

// Example 4: LazyList with filter and repeat
val example4 = LazyList.continually(13).filter(_ % 2 != 0).take(2).toList
println(s"Example 4: $example4") // Produces List(13, 13)

// Task 1: LazyList counting from 1 upwards
val countingFromOne = LazyList.from(1)
println(s"Counting from 1: ${countingFromOne.take(10).toList}")

// Task 2: LazyList generating the 2 times table
val twoTimesTable = LazyList.from(1).map(_ * 2)
println(s"2 times table: ${twoTimesTable.take(10).toList}")

// Task 3: LazyList generating powers of 2
val powersOfTwo = LazyList.iterate(2)(_ * 2)
println(s"Powers of 2: ${powersOfTwo.take(10).toList}")

// Task 4: LazyList counting alphabetically
def alphabeticStream(current: String): LazyList[String] = {
  val next = (current.last + 1).toChar
  if (next > 'z') alphabeticStream(current.dropRight(1) + 'a') else current.init + next
}

val alphabetic = LazyList.iterate("a")(alphabeticStream)
println(s"Alphabetic counting: ${alphabetic.take(30).toList}")

// Task 5: LazyList generating random numbers from 1 to 6
def randomDiceRoll: LazyList[Int] = LazyList.continually(IO.delay(new Random().nextInt(6) + 1).unsafeRunSync())
println(s"Random dice rolls: ${randomDiceRoll.take(10).toList}")
