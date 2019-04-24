package main.java.com.dirteratt.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.HashMap;

/**
 * @author dustina
 */

@Controller
public class HomeController {

    @RequestMapping(value="/")
    public String index() {
        return "index";
    }

    @RequestMapping(value="/api/line_months", method = RequestMethod.GET)
    @ResponseBody
    public ArrayList<String> getLineMonths() {
        ArrayList<String> al = new ArrayList<>();
        al.add("January");
        al.add("February");
        al.add("March");
        al.add("April");
        al.add("May");
        al.add("June");
        al.add("July");
        al.add("August");
        al.add("September");
        al.add("October");
        al.add("November");
        al.add("December");
        return al;
    }

    @RequestMapping(value="api/line_points", method = RequestMethod.GET)
    @ResponseBody
    public ArrayList<Integer> getLinePoints() {
        ArrayList<Integer> ints = new ArrayList<>();
        for(int i = 0; i < 12; i++) {
            ints.add((int)(Math.random() * 100));
        }
        return ints;
    }

    @RequestMapping(value="api/doughnut_data", method = RequestMethod.GET)
    @ResponseBody
    public HashMap<String, Integer> getDoughnutData() {
        HashMap<String, Integer> vals = new HashMap<>();
        String[] keys = {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"};
        for(int i = 0; i < 3; i++) {
            vals.put(keys[i], (int)(Math.random() * 50));
        }
        return vals;
    }
}
