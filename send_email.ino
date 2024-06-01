#include <WiFi.h>
#include <HTTPClient.h>

const char* ssid = "M_Salama";
const char* password = "55555555";
int ir = 19;

void setup() {

  
  Serial.begin(115200);
  delay(4000);
  WiFi.begin(ssid, password);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  
  pinMode(ir, INPUT);
  Serial.println("Connected to the WiFi network");
}

void loop() {
  int read = digitalRead(ir);

  if (read == 1) {
    if (WiFi.status() == WL_CONNECTED) { // Check if WiFi is still connected
      
      
      HTTPClient http;
      http.begin("https://api-door-iot-1.onrender.com/open");

      int httpResponseCode = http.GET();
      if (httpResponseCode > 0) {
        String response = http.getString();
        Serial.println(httpResponseCode);
        Serial.println(response);
        Serial.println("door is open");

      } else {
        Serial.println("Error on HTTP request");
      }
      http.end();
    } else {
      Serial.println("WiFi not connected");
    }
  }

  delay(30000);
}