import java.util.ArrayList;

public class Route {
    private String name;
    private ArrayList<String> destinations;

    public Route(String name, ArrayList<String> destinations) {
        this.name = name;
        this.destinations = destinations;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ArrayList<String> getDestinations() {
        return destinations;
    }

    public void setDestinations(ArrayList<String> destinations) {
        this.destinations = destinations;
    }
}
