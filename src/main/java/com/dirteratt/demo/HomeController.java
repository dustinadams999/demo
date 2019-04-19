package com.dirteratt.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;

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

    @RequestMapping(value="api/pie_points", method = RequestMethod.GET)
    @ResponseBody
    public ArrayList<Integer> getPieData() {
        ArrayList<Integer> ints = new ArrayList<>();
        for(int i = 0; i < 4; i++) {
            ints.add((int)(Math.random() * 50));
        }
        return ints;
    }
}
