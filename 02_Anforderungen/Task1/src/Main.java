import java.util.ArrayList;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        //TIP Press <shortcut actionId="ShowIntentionActions"/> with your caret at the highlighted text
        // to see how IntelliJ IDEA suggests fixing it.
        System.out.printf("Hello and welcome!");


    }
    public static Route createRoute(String name, ArrayList<Destination> destinations) {
        return new Route(name, destinations);
    }

    public static Route updateRoute(Route route, Destination destination) {
        if(route.getDestinations().contains(destination)){
            Route newRoute = route;
            newRoute.getDestinations().remove(destination);
            route.setDestinations(newRoute.getDestinations());
        } else {
            Route newRoute = route;
            newRoute.getDestinations().add(route.getDestinations().toArray().length, destination);
            route.setDestinations(newRoute.getDestinations());
        }
        return route;
    }

    public static String checkRoute(Route route) {
        String formattedRoute = "Your Route: " + route.getName() + "\n" + "Destinations: \n";
        for ()
    }

}