public class Destination {
    private Integer orderNumber;
    private String name;

    public Destination(Integer orderNumber, String name) {
        this.orderNumber = orderNumber;
        this.name = name;
    }

    public Integer getOrderNumber() {
        return orderNumber;
    }

    public void setOrderNumber(Integer orderNumber) {
        this.orderNumber = orderNumber;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
