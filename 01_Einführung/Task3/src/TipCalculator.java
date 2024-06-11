import java.util.ArrayList;
import java.util.List;

public class TipCalculator {
    private List<String> names = new ArrayList<>();
    private int tipPercentage = 0;

    public Integer addPerson(String name) {
        names.add(name);
        if(names.size() > 5) {
            return 20;
        } else if(names.size() > 0) {
            return 10;
        }
        return 0;
    }

    public List<String> getNames() {
        return names;
    }

    public int getTipPercentage() {
        return tipPercentage;
    }
}
