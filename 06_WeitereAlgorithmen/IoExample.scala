
import scala.util.Random
import cats.effect.IO
import cats.effect.unsafe.implicits.global

def rollDiceImpure(): Int = {
    val random = new Random
    random.nextInt(6) + 1
}

// Pure function wrapping the impure function
def rollDice(): IO[Int] = {
    IO.delay(rollDiceImpure())
}

// Function to check if the player is allowed to leave home
def allowToLeafHome: IO[Boolean] = {
    val checkRoll = rollDice()
    checkRoll.map(_ == 6)
}

// Call the function
val allowToLeaf = allowToLeafHome

// Execute the IO to get the result
val result = allowToLeaf.unsafeRunSync()
println(s"Erlaubt, die Basis zu verlassen: $result")
