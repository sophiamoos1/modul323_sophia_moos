//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        //TIP Press <shortcut actionId="ShowIntentionActions"/> with your caret at the highlighted text
        // to see how IntelliJ IDEA suggests fixing it.
        System.out.printf("Hello and welcome!");
        System.out.printf("imperative: ");
        System.out.println("heyy: " + calculateScore("heyy"));
        System.out.println("please: " + calculateScore("please"));
        System.out.println("");
        System.out.printf("declarative: ");
        System.out.println("cat " + wordScore("cat"));
        System.out.println("school " + wordScore("school"));
    }
    // imperative
    public static int calculateScore(String word){
        int score = 0;
        for (char c : word.toCharArray()) {
            if (c != 'a' && c != 'A') {
                score++;
            }
        }
        return score;
    }
    // declarative
    public static int wordScore(String word){
        return word.toLowerCase().replaceAll("a", "").length();
    }

}