
import scala.concurrent.duration._
import cats.effect.{IO, Ref}
import cats.effect.unsafe.implicits.global

// rollDice function
def rollDice(): IO[Int] = IO.delay {
  val random = new scala.util.Random
  random.nextInt(6) + 1
}

// Code 1
val code1 = for {
    _ <- IO.sleep(1.second)
    result <- List(rollDice(), rollDice()).parSequence
} yield result.sum
println(s"Code 1 Result: ${code1.unsafeRunSync()}")

// Code 2
val code2 = for {
    storedCasts <- Ref.of[IO, List[Int]](List.empty)
    singleCast = rollDice().flatMap(result => storedCasts.update(_.appended(result)))
    _ <- List(singleCast, singleCast).parSequence
    casts <- storedCasts.get
} yield casts
println(s"Code 2 Result: ${code2.unsafeRunSync()}")

// Code 3
val code3 = for {
    storedCasts <- Ref.of[IO, List[Int]](List.empty)
    singleCast = rollDice().flatMap(result => storedCasts.update(_.appended(result)))
    _ <- List.fill(3)(singleCast).parSequence
    casts <- storedCasts.get
} yield casts
println(s"Code 3 Result: ${code3.unsafeRunSync()}")

// Code 4
val code4 = for {
    storedCasts <- Ref.of[IO, Int](0)
    singleCast = rollDice().flatMap(result => if (result == 6) storedCasts.update(_ + 1) else IO.unit)
    _ <- List.fill(100)(singleCast).parSequence
    casts <- storedCasts.get
} yield casts
println(s"Code 4 Result: ${code4.unsafeRunSync()}")

// Code 5
val code5 = List.fill(100)(IO.sleep(1.second).flatMap(_ => rollDice())).parSequence.map(_.sum)
println(s"Code 5 Result: ${code5.unsafeRunSync()}")
