package com.cufta22.cloud.gateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;


@SpringBootApplication
public class ApiGatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiGatewayApplication.class, args);
	}

	@Bean
	public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
		return builder.routes()
				.route("user_route", r -> r.path("/users/*")
						.filters(f -> f.rewritePath("/users/(?<segment>.*)", "/${segment}"))
						.uri("http://localhost:9002"))
				.route("department_route", r -> r.path("/departments/*")
						.filters(f -> f.rewritePath("/departments/(?<segment>.*)", "/${segment}"))
						.uri("http://localhost:9001"))
				.build();
	}

}
