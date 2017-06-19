package com.yoti.api.examples.springboot;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.yoti.api.client.ActivityDetails;
import com.yoti.api.client.HumanProfile;
import com.yoti.api.client.ProfileException;
import com.yoti.api.client.YotiClient;
import com.yoti.api.client.Date;

import com.worldpay.sdk.WorldpayRestClient;

@Controller
public class YotiLoginController {

    private static final Logger LOG = LoggerFactory.getLogger(YotiLoginController.class);

    private final YotiClient client;

    @Autowired
    public YotiLoginController(final YotiClient client) {
        this.client = client;
    }

    /**
     * This endpoint is the "Callback URL" which will be called by user's browser after user logs in. It's a GET endpoint.
     * We will pass you a token inside url query string (/login?token=token-value)
     */

    @RequestMapping("/basket")
    public String basket() {
        return "basket";
    }

    @RequestMapping("/checkout")
    public String checkout() {
        return "checkout";
    }
/*    @RequestMapping("/pay")
    public String pay() {
        WorldpayRestClient restClient = new WorldpayRestClient("T_S_77b08f82-b877-4989-b595-f2773ef1c831");
 
        OrderRequest orderRequest = new OrderRequest();
        orderRequest.setToken("your-order-token");
        orderRequest.setAmount(500);
        orderRequest.setCurrencyCode(CurrencyCode.GBP);
        orderRequest.setName("test name");
        orderRequest.setOrderDescription("Order description");
        orderRequest.setCustomerOrderCode("Order code");
         
        Address address = new Address();
        address.setAddress1("123 House Road");
        address.setAddress2("A village");
        address.setCity("London");
        address.setCountryCode(CountryCode.GB);
        address.setPostalCode("EC1 1AA");
        orderRequest.setBillingAddress(address);
         
        try {
            OrderResponse orderResponse = restClient.getOrderService().create(orderRequest);
            System.out.println("Order code: " + orderResponse.getOrderCode());
        } catch (WorldpayException e) {
            System.out.println("Error code: " + e.getApiError().getCustomCode());
            System.out.println("Error description: " + e.getApiError().getDescription());
            System.out.println("Error message: " + e.getApiError().getMessage());
        }
        System.out.println("Done");
    }
*/
    @RequestMapping("/profile")
    public String doLogin(@RequestParam("token") final String token, final Model model) {
        ActivityDetails activityDetails;
        HumanProfile profile;
        try {
            activityDetails = client.getActivityDetails(token);
            profile = activityDetails.getUserProfile();
        } catch (final ProfileException profileException) {
            LOG.info("Could not get profile", profileException);
            return "error";
        }

        Date dob = profile.getDateOfBirth();

        String month;

       /* if( dob.getMonth() < 10) {
            month = "0" + dob.getMonth();
        } else {
            month = dob.getMonth().string();
        }
*/
        // load profile data into model
        model.addAttribute("day", dob.getDay());
        model.addAttribute("month", dob.getMonth());
        model.addAttribute("year", dob.getYear());
        //model.addAttribute("userId", activityDetails.getUserId());

        return "profile";
    }


}
