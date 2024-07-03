/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        console.log('Received Device Ready Event');
        console.log('calling setup push');
        app.setupPush();
    },
    setupPush: function() {
        console.log('calling push init');
       var push = PushNotification.init({
						android: {
						},
						browser: {
							pushServiceURL: 'https://push.api.phonegap.com/v1/push'
						},
						ios: {
							alert: "true",
							badge: "true",
							sound: "true"
						},
						windows: {}
					});
       
        console.log('after init');


        push.on('registration', function(data) {
            console.log('registration event: ' + data.registrationId);

            //var oldRegId = localStorage.getItem('registrationId');
            //if (oldRegId !== data.registrationId) {
                // Save new registration ID
                localStorage.setItem('registrationId', data.registrationId);
                // Post registrationId to your app server as the value has changed
				
			//}
			//else{
				
				push.subscribe(localStorage.topicForMessage, function() {
					console.log('success');
					//alert('success')
				}, function(e) {
					console.log('error:');
					console.log(e);
					//alert(e);
				});

				
				
			//}

            //var parentElement = document.getElementById('registration');
            //var listeningElement = parentElement.querySelector('.waiting');
            //var receivedElement = parentElement.querySelector('.received');

            //listeningElement.setAttribute('style', 'display:none;');
            //receivedElement.setAttribute('style', 'display:block;');
        });

		function OnSuccess(data, status) {
			           try
					   {
							var messages = data.split("|");
							//alert(message[1]);
							
							
						
							
					      
					   }
					   catch(e)
					   {
							//alert("OnSuccess : " + data);			   						   
					   }
					   
		}
		
        function OnError(request, status, error) {
            //alert("OnError Webservice Error: " + request.statusText);
        }
		
		
        push.on('error', function(e) {
            console.log("push error = " + e.message);
        });

        push.on('notification', function(data) {
			
			navigator.notification.alert(
                data.message,         // message
                null,                 // callback
                data.title,           // title
                'Ok'                  // buttonName
            );
			
			try{
				
				if (data.additionalData.page.includes("htm"))
				{
					if (data.additionalData.page != "index.html")
					{
					
						window.location.assign(data.additionalData.page);
						return;
					}	
					
				}
				
				
			  }
			 catch(e)
			  {
						//alert("OnSuccess : " + data);			   						   
			  }
			
       });
    }
};
