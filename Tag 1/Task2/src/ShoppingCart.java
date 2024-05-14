//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
import java.util.ArrayList;
import java.util.List;

public class ShoppingCart {
    private List<String> items;
    private boolean bookAdded;

    public ShoppingCart() {
        this.items = new ArrayList<>();
        this.bookAdded = false;
    }

    public void addItem(String item) {
        items.add(item);
        if (item.equals("book")) {
            bookAdded = true;
        }
    }

    public void removeItem(String item) {
        items.remove(item);
        if (item.equals("book")) {
            bookAdded = false;
        }
    }

    public double getDiscountPercentage() {
        if (bookAdded) {
            return 0.05; // 5% Rabatt, wenn ein Buch im Warenkorb ist
        } else {
            return 0.0; // Kein Rabatt, wenn kein Buch im Warenkorb ist
        }
    }

    public List<String> getItems() {
        return items;
    }

    public static void main(String[] args) {
        ShoppingCart cart = new ShoppingCart();
        cart.addItem("book");
        cart.addItem("shirt");
        System.out.println("Discount percentage: " + cart.getDiscountPercentage());
        System.out.println("Items in cart: " + cart.getItems());

        cart.removeItem("book");
        System.out.println("Discount percentage after removing book: " + cart.getDiscountPercentage());
        System.out.println("Items in cart after removing book: " + cart.getItems());
    }
}
