# UKI Soil Testing – Beckn Protocol Agri Use Case Implementation Guide

---

## Overview

This comprehensive guide helps network participants build and integrate applications with the Unified Krishi Interface (UKI) open network using the Beckn Protocol for soil testing services.

Soil testing is fundamental to modern agriculture in India. It empowers farmers to make data-driven decisions that significantly increase crop yields, optimize fertilizer usage, reduce unnecessary costs, and promote environmentally sustainable farming practices. Without proper soil analysis, farmers are essentially farming blindfolded - unable to address specific nutrient deficiencies or soil health issues that directly impact their livelihood.

---

## Table of Contents

- [1. Introduction](#1-introduction)
- [2. BAP-BPP Roles and Entity Mapping](#2-bap-bpp-roles-and-entity-mapping)
- [3. Network Roles: BAP & BPP](#3-network-roles-bap--bpp)
- [4. Soil Testing Journey (DOFP)](#4-soil-testing-journey-dofp)
- [5. API Calls and Schema](#5-api-calls-and-schema)
- [6. Flow Diagrams](#6-flow-diagrams)
- [7. Taxonomy & Tags](#7-taxonomy--tags)
- [8. Assumptions & Challenges](#8-assumptions--challenges)
- [9. Developer Notes](#9-developer-notes)
- [10. Implementation Roadmap](#10-implementation-roadmap)
- [11. Compliance Requirements](#11-compliance-requirements)
- [12. Frequently Asked Questions](#12-frequently-asked-questions)

---

## 1. Introduction

This guide serves developers who want to build or integrate applications into the UKI Agri network specifically for soil testing services. The Beckn protocol creates a standardized way for different agricultural platforms to communicate with each other, making services more accessible to farmers across India.

### Benefits of Beckn Protocol for Agricultural Services

- **Decentralized Architecture**: Allows many different soil testing providers to join the network without any single company controlling everything - from small local labs to large government facilities
- **Interoperability**: Farmers can use any compatible app to access all testing services in the network, eliminating the need to download multiple apps
- **Scalability**: The network can grow to include thousands of providers and new types of services without requiring major system changes
- **Discoverability**: Makes it easy for farmers to find specialized local testing services that they might never have known existed otherwise
- **Standardization**: Creates consistent ways to define and deliver services while still allowing providers to offer their unique specialties
- **Data Sovereignty**: Farmers remain in control of their own farm data, deciding who can access it and how it can be used

### Target Audience

- **App Developers**: Teams building mobile or web applications that farmers will use to request soil testing
- **Soil Testing Providers**: Government labs, private companies, and universities looking to make their services digitally accessible
- **Agricultural Extension Services**: Organizations that help educate and support farmers with technical advice
- **Agri-input Companies**: Fertilizer, seed, and other agricultural input providers who want to offer value-added soil analysis to improve their services

---

## 2. BAP-BPP Roles and Entity Mapping

### Network Participants

#### Entities Involved:
1. **Farmer** - End user who needs soil testing services (digital literacy varies from limited to tech-savvy)
2. **Aggregator** - Organizations bringing together multiple service providers (FPOs, startups, government apps)
3. **Service Provider** - Actual soil testing facilities (government labs, private laboratories, universities, mobile units)
4. **Extension Agent** - Field workers who help farmers use digital platforms and explain results
5. **Logistics Partner** - Services transporting soil samples from farms to laboratories
6. **Advisory Service** - Experts analyzing test results and providing crop recommendations

#### BAP-BPP Role Mapping:

**BAP (Beckn Application Platform) - Farmer Side:**
- **Farmer Mobile App/Portal**: Interface used by farmers to discover and book soil testing services
- **Agricultural Advisory Platform**: Apps that help farmers with farm management
- **Government Extension Services**: Digital platforms used by agricultural extension officers

**BPP (Beckn Provider Platform) - Service Provider Side:**
- **Soil Testing Laboratory Platform**: Digital platform of certified soil testing labs
- **Agricultural Service Aggregator**: Platform aggregating multiple soil testing services
- **Integrated Farm Service Provider**: Companies providing end-to-end agricultural services

### Network Architecture

```mermaid
graph TD
  A[Farmer via BAP] -->|search| BPP1[Krishi Kendra Soil Services]
  A -->|select/init/confirm| BPP1
  BPP1 -->|status/report| A
  A -->|rating/support| BPP1
```

---

## 3. Network Roles: BAP & BPP

### Beckn Application Platform (BAP)

- **User Interface Management**: Creates farmer-friendly screens in local languages with simple navigation, visual aids, and voice support for those who cannot read
- **Service Discovery**: Finds and displays suitable soil testing services near the farmer based on their specific needs, location, and the crops they grow
- **Order Management**: Helps farmers select services, schedule sample collection, and handle payments with multiple options (cash, digital, subsidies)
- **Fulfillment Tracking**: Provides clear updates on when samples will be collected, testing progress, and when results will be available
- **Feedback & Support**: Allows farmers to rate services and get help if something goes wrong
- **Data Management**: Safely stores information about farms, previous test results, and farmer preferences while ensuring privacy
- **Recommendation Engine**: Suggests the most appropriate tests based on what crops the farmer grows, seasonal factors, and regional soil issues

### Beckn Provider Platform (BPP)

- **Service Catalog Management**: Maintains a comprehensive, up-to-date list of all available soil tests with clear descriptions, benefits, and pricing
- **Availability Management**: Shows when testing services are available in different areas with real-time scheduling
- **Logistics Coordination**: Plans efficient routes for field agents to collect samples from multiple farms in a single trip
- **Testing Operations**: Manages the entire laboratory workflow from sample preparation to analysis using standardized methods
- **Report Generation**: Creates easy-to-understand soil analysis reports with visual elements to help farmers interpret complex data
- **Agent Allocation**: Assigns the right field staff based on location, language needs, and technical expertise
- **Inventory Management**: Tracks and maintains adequate supplies of testing materials, sample containers, and chemicals
- **Compliance Handling**: Ensures all testing follows government standards and scientific protocols for accurate results

---

## 4. Soil Testing Journey (DOFP)

### Use Case Visualization: Smita's Soil Testing Journey

Smita, a farmer from Nashik, wants to test her soil quality to plan for agricultural inputs and select the right crops to maximize yield. She uses a UKI-enabled app to find soil testing services. She searches by location, rating, experience of service provider, cost, available dates, and collection method (pickup from farm or deliver to testing center). The app shows multiple providers including their ratings and experience. Smita selects Krishi Kendra Soil Services, which responds with available time slots, pricing based on collection type, soil preparation instructions (via video, image, audio, or PDF), and terms and conditions. After reviewing, Smita confirms the order, choosing cash on delivery as her payment method. For farm pickup, a collection agent arrives at the scheduled time, collects the samples, and Smita pays by cash. Alternatively, she could collect samples herself following the provided instructions and deliver them to the testing center. Throughout the process, Smita receives status updates, and finally gets a detailed digital report with nutrient analysis and recommendations. She then rates the service based on quality, provider behavior, and support experience.

### 4.1. Discovery

- When a farmer needs soil testing, their app (BAP) sends a `search` request to find available services
- The search includes important details like:
  - The farmer's exact location
  - What kind of soil tests they need (NPK, Secondary Nutrients, Micronutrients, etc.)
  - How they want samples collected (pickup from farm or drop-off at a center)
- Testing providers (BPPs) respond with complete information:
  - Different testing packages (from basic NPK tests to comprehensive analysis)
  - Clear pricing (including any government subsidies or special rates)
  - Collection options (whether they'll come to the farm or the farmer needs to bring samples)
  - Available dates and times for sample collection
  - How long it will take to get results (turnaround time)
  - Additional services like personalized recommendations
  - Credentials showing they're qualified and certified
  - Ratings and experience of the service provider

### 4.2. Order

- The farmer reviews all available options and chooses a provider based on what matters most to them (price, convenience, reputation, etc.)
- The service provider shares additional details:
  - Available time slots for service
  - Exact pricing based on collection method
  - Prerequisites for sample collection (soil preparation steps)
  - Terms and conditions including cancellations and refunds
- The farmer then provides specific details:
  - Whether they want someone to come collect samples or they'll drop them off
  - Exactly which fields or plots need testing (with locations for multiple areas)
  - When they'd prefer the collection to happen
  - Optional crop information (current and previous crops, varieties, yields)
  - How they want to pay (cash on delivery, digital payment, etc.)
- The app follows a three-step process to confirm the order:
  - `select`: Checks final availability and confirms exact pricing
  - `init`: Begins the booking process and sets up payment
  - `confirm`: Finalizes the order after the farmer reviews and approves everything

### 4.3. Fulfillment

- **When the Provider Collects Samples from the Farm**:
  - The testing lab assigns a qualified technician to visit the farm
  - The technician receives detailed information about the farm location and specific needs
  - The farmer receives status updates on the day of service delivery
  - Upon arrival, the technician shows ID to confirm they're official
  - Samples are collected following scientific protocols
  - The farmer pays by cash (or chosen payment method)
  - Samples are carefully transported to the lab for testing

- **When the Farmer Brings Samples to a Collection Center**:
  - The farmer receives clear instructions and proper containers for collecting samples
  - Step-by-step guidance helps them take samples correctly
  - The farmer brings samples to the testing center
  - Staff verify the samples and the farmer pays by cash
  - A tracking receipt is provided

- **Inside the Testing Laboratory**:
  - Samples go through preparation and analysis using standardized methods
  - Tests are conducted for requested parameters (NPK, Secondary Nutrients, Micronutrients, etc.)
  - Quality checks verify the accuracy of results
  - The farmer receives updates throughout the testing process
  - A comprehensive report is created with all test values, interpretations, and recommendations

### 4.4. Post-Fulfillment

- Once testing is complete, the farmer receives a comprehensive report that includes:
  - Clear presentation of all test results (NPK, pH, OC, EC, micronutrients, etc.)
  - Visual charts and graphs making it easy to understand soil health
  - Specific recommendations for fertilizers and soil treatments
  - Suggestions for which crops would grow best in their soil
  - Additional materials like videos or PDFs explaining the interventions
- The farmer can rate the service on multiple aspects:
  - Product/service quality
  - Service provider (timeliness, professionalism)
  - Support quality
- If there are problems, they can reach out to support services

**Mermaid Diagram: DOFP Flow**

```mermaid
sequenceDiagram
  participant F as Farmer (BAP)
  participant B as BPP (Provider)

  F->>B: search
  B-->>F: on_search (service list)
  F->>B: select/init/confirm
  B-->>F: on_confirm (order booked)
  B-->>F: status/tracking (fulfillment updates)
  F->>B: rating/support
```

---

## 5. API Calls and Schema

### 5.1. API Call Sequence

```
search → on_search → select → on_select → init → on_init → confirm → on_confirm → status → on_status → tracking → on_tracking → update → on_update → support → on_support
```

### 5.2. Sample API Payloads

#### Discovery of Soil Testing Services

**Request: `POST /search`**

```json
{
  "context": {
    "domain": "services:uki",
    "action": "search",
    "location": {
      "country": {
        "name": "India",
        "code": "IND"
      },
      "city": {
        "name": "Nashik",
        "code": "std:0253"
      }
    },
    "version": "1.1.0",
    "bap_id": "farmer-app.uki.com",
    "bap_uri": "https://farmer-app.uki.com",
    "transaction_id": "soil-test-001",
    "message_id": "msg-001",
    "timestamp": "2025-06-02T19:07:25Z"
  },
  "message": {
    "intent": {
      "category": {
        "descriptor": {
          "code": "soil-testing"
        }
      },
      "item": {
        "descriptor": {
          "name": "Comprehensive Soil Analysis"
        },
        "tags": [
          {
            "descriptor": {
              "name": "test-parameters"
            },
            "list": [
              {
                "descriptor": {
                  "code": "npk-test"
                },
                "value": "required"
              },
              {
                "descriptor": {
                  "code": "secondary-nutrients"
                },
                "value": "required"
              },
              {
                "descriptor": {
                  "code": "ph-ec-oc"
                },
                "value": "required"
              },
              {
                "descriptor": {
                  "code": "micronutrients"
                },
                "value": "required"
              }
            ]
          }
        ]
      },
      "fulfillment": {
        "stops": [
          {
            "type": "collection-location",
            "location": {
              "gps": "20.0112, 73.7902",
              "address": "Smita's Farm, Nashik District"
            }
          }
        ]
      }
    }
  }
}
```

**Response: `on_search`**

```json
{
  "context": {
    "domain": "services:uki",
    "action": "on_search",
    "location": {
      "country": {
        "name": "India",
        "code": "IND"
      },
      "city": {
        "name": "Nashik",
        "code": "std:0253"
      }
    },
    "version": "1.1.0",
    "bap_id": "farmer-app.uki.com",
    "bap_uri": "https://farmer-app.uki.com",
    "bpp_id": "krishi-kendra.com",
    "bpp_uri": "https://krishi-kendra.com",
    "transaction_id": "soil-test-001",
    "message_id": "msg-001",
    "timestamp": "2025-06-02T19:07:25Z"
  },
  "message": {
    "catalog": {
      "descriptor": {
        "name": "Soil Testing Services"
      },
      "providers": [
        {
          "id": "krishi-kendra-soil-services",
          "descriptor": {
            "name": "Krishi Kendra Soil Services",
            "short_desc": "NABL certified soil testing laboratory",
            "long_desc": "Leading agricultural testing laboratory with expertise in soil analysis and crop recommendations",
            "images": [
              {
                "url": "https://krishi-kendra.com/logo.png"
              }
            ]
          },
          "rating": "4.5",
          "tags": [
            {
              "descriptor": {
                "name": "experience"
              },
              "list": [
                {
                  "descriptor": {
                    "name": "years_in_service"
                  },
                  "value": "12"
                }
              ]
            }
          ],
          "categories": [
            {
              "id": "c1",
              "descriptor": {
                "code": "soil-testing",
                "name": "Soil Testing Services"
              }
            }
          ],
          "fulfillments": [
            {
              "id": "f1",
              "type": "farm_pickup"
            },
            {
              "id": "f2",
              "type": "centre_dropoff"
            }
          ],
          "items": [
            {
              "id": "npk-test",
              "descriptor": {
                "name": "NPK Test - Primary Nutrient Test",
                "short_desc": "Analysis of Nitrogen, Phosphorus, and Potassium levels"
              },
              "price": {
                "currency": "INR",
                "value": "300"
              }
            },
            {
              "id": "comprehensive-test",
              "descriptor": {
                "name": "Comprehensive Soil Analysis",
                "short_desc": "Complete soil fertility analysis including macro and micro nutrients, pH, EC, and OC"
              },
              "price": {
                "currency": "INR",
                "value": "650"
              }
            },
            {
              "id": "secondary-nutrients",
              "descriptor": {
                "name": "Secondary Nutrient Test",
                "short_desc": "Analysis of Ca, Mg, and S levels"
              },
              "price": {
                "currency": "INR",
                "value": "250"
              }
            },
            {
              "id": "micronutrient-test",
              "descriptor": {
                "name": "Micronutrient Test",
                "short_desc": "Analysis of Zn, B, Cu, Fe, Mo, and Mn levels"
              },
              "price": {
                "currency": "INR",
                "value": "400"
              }
            }
          ]
        }
      ]
    }
  }
}
```

### 5.3. Order Creation Process

**Request: `POST /select`**
```json
{
  "context": {
    "domain": "services:uki",
    "action": "select",
    "version": "1.1.0",
    "bap_id": "farmer-app.uki.com",
    "bpp_id": "krishi-kendra.com",
    "transaction_id": "soil-test-001",
    "message_id": "msg-003",
    "timestamp": "2025-06-02T19:07:25Z"
  },
  "message": {
    "order": {
      "provider": {
        "id": "krishi-kendra-soil-services"
      },
      "items": [
        {
          "id": "comprehensive-test",
          "quantity": {
            "selected": {
              "count": 1
            }
          }
        }
      ],
      "fulfillments": [
        {
          "id": "f1",
          "type": "farm_pickup",
          "stops": [
            {
              "type": "collection-location",
              "location": {
                "gps": "20.0112, 73.7902",
                "address": "Smita's Farm, Nashik District"
              },
              "time": {
                "range": {
                  "start": "2025-06-03T09:00:00Z",
                  "end": "2025-06-03T11:00:00Z"
                }
              }
            }
          ]
        }
      ]
    }
  }
}
```

Additional API examples are provided in the full implementation guide including init, confirm, status, and support requests and responses.

---

## 6. Flow Diagrams

### 6.1. DOFP Layered Flow

**Mermaid Diagram: Layered View**

```mermaid
graph LR
  subgraph Discovery
    A1[search] --> A2[on_search]
  end
  subgraph Order
    B1[select] --> B2[on_select]
    B2 --> B3[init]
    B3 --> B4[on_init]
    B4 --> B5[confirm]
    B5 --> B6[on_confirm]
  end
  subgraph Fulfillment
    C1[status] --> C2[on_status]
    C3[tracking] --> C4[on_tracking]
  end
  subgraph Post-Fulfillment
    D1[rating] --> D2[on_rating]
    D3[support] --> D4[on_support]
  end
```

### 6.2. General Beckn Message Flow and Error Handling

Beckn is an asynchronous protocol at its core:
- When a network participant (NP1) sends a message to another participant (NP2), NP2 immediately returns an ACK/NACK
- An ACK indicates that NP2 will process the message and send an on_xxx response later
- After processing, NP2 sends the actual response in the corresponding on_xxx message
- This response can contain a message field (success) or error field (failure)
- NP1 sends back an ACK/NACK upon receiving the on_xxx message
- In the flow diagrams, these ACK/NACK exchanges are not shown for clarity

**Sample NACK structure:**
```json
{
    "message": {
        "ack": {
            "status": "NACK"
        }
    },
    "error": {
        "code": 400,
        "message": "OpenApiValidator Error at BAP-CLIENT"
    }
}
```

**Sample on_select with error:**
```json
{
    "context": {
        "action": "on_select",
        "version": "1.1.0"
    },
    "error": {
        "code": 30001,
        "message": "Requested provider is not in the database"
    }
}
```

### 6.3. Data Flow & Security Zones

```mermaid
graph TD
  F[Farmer Input] --> BAP
  BAP -->|Encrypted| Network[Beckn Gateway]
  Network -->|Secure API| BPP
  BPP -->|Signed Report| BAP
  BAP --> F
```

---

## 7. Taxonomy & Tags

### 7.1 Collection Types
- **farm_pickup**: Provider sends qualified personnel to collect soil samples directly from the farm
- **centre_dropoff**: Farmer collects samples and delivers to a testing center
- **mobile_lab**: On-site testing using portable equipment (limited parameters)
- **kiosk_collection**: Self-service collection points in agricultural centers

### 7.2 Test Parameters
- **npk_test**: Primary Nutrients (Nitrogen, Phosphorus, Potassium) essential for basic crop growth
- **secondary_nutrients**: Secondary nutrients (Ca, Mg, S) required for plant functions
- **ph_ec_oc**: pH (acidity/alkalinity), EC (Electrical Conductivity), OC (Organic Carbon)
- **micronutrients**: Trace elements (Zn, B, Cu, Fe, Mo, Mn) required in smaller quantities
- **soil_texture**: Physical composition (sand, silt, clay percentages)
- **soil_moisture**: Water content measurement
- **contaminants**: Tests for harmful substances in soil
- **cec**: Cation Exchange Capacity indicating nutrient holding ability
- **water_test**: Analysis of irrigation water quality
- **chemical_test**: Specialized chemical analyses

### 7.3 Payment Methods
- **COD**: Cash on Delivery for farm pickup or at center dropoff
- **UPI**: Digital payments through Unified Payments Interface
- **Card**: Credit/Debit card payments
- **Wallet**: Digital wallet payments
- **Bank_Transfer**: Direct bank transfers
- **Subsidy_Voucher**: Government-issued testing subsidies

### 7.4 Order Status Taxonomy
- **Pending**: Order received but not yet confirmed
- **Confirmed**: Order accepted and scheduled
- **Agent_Assigned**: Collection personnel allocated (for farm pickup)
- **En_Route**: Agent traveling to collection location
- **Sample_Collected**: Soil samples obtained and in transit to lab
- **Received_At_Lab**: Samples arrived at testing facility
- **Testing_In_Progress**: Laboratory analysis underway
- **Quality_Check**: Results undergoing verification
- **Report_Ready**: Analysis complete and report available
- **Delivered**: Report successfully provided to farmer
- **Cancelled**: Order terminated before fulfillment
- **Disputed**: Results questioned or retest requested

### 7.5 Rating Metrics
- **service_quality**: Overall quality of testing service
- **provider_behavior**: Professionalism of collection agent or center staff
- **timeliness**: Adherence to scheduled timings
- **report_clarity**: Comprehensibility of test results and recommendations
- **value_for_money**: Perceived value relative to cost
- **support**: Quality of assistance for questions or issues
- **recommendation_usefulness**: Practicality of provided crop recommendations

### 7.6 Farm Information Tags
- **crop_category**: Agriculture Crop / Forest Crop
- **crop_type**: Categorization of crops
- **crop**: Specific crop being grown
- **crop_variety**: Specific variety of the crop
- **previous_crop**: Previously grown crop in the same field
- **previous_yield**: Harvest quantity from previous crop cycle
- **irrigation_type**: Method of water application
- **farming_practice**: Conventional, organic, natural farming, etc.
- **soil_issues**: Known problems like waterlogging, erosion, compaction
- **topography**: Land slope and elevation characteristics

---

## 8. Assumptions & Challenges

### 8.1 Technical Assumptions

- All BAPs/BPPs adhere to Beckn protocol 1.1+ specifications
- Network infrastructure supports real-time API communications
- Digital identity verification is available for field agents
- GPS accuracy is sufficient in rural areas for precise location tagging
- Network participants implement proper data security measures
- Backend systems can handle seasonal demand fluctuations

### 8.2 Operational Assumptions

- Offline farmer interaction via agents is supported for low digital literacy
- Collection logistics handled by providers or authorized agents
- Standard operating procedures exist for sample collection
- Testing methodologies follow accepted agricultural standards
- Result interpretation guidelines are consistent across providers
- Providers maintain adequate quality control measures

### 8.3 Regulatory Assumptions

- Service providers have necessary certifications for soil testing
- Data sharing complies with relevant privacy regulations
- Subsidy schemes can be digitally integrated with payment systems
- Agricultural departments recognize digital soil health reports
- Testing methodologies meet governmental standards

### 8.4 Implementation Challenges

- **Connectivity Issues**: Intermittent internet in rural areas affecting real-time updates
- **Digital Literacy**: Varying levels of comfort with technology among farmers
- **Last-Mile Logistics**: Reaching remote farms efficiently for sample collection
- **Standardization**: Ensuring consistent testing methodologies across providers
- **Language Barriers**: Supporting multiple regional languages for farmer interfaces
- **Payment Integration**: Handling various payment methods including subsidy vouchers
- **Seasonality**: Managing high demand during pre-sowing periods
- **Data Integrity**: Ensuring accurate sample tagging and result association
- **Result Interpretation**: Providing actionable insights from technical data
- **Trust Building**: Establishing credibility of digital soil health reports

### 8.5 Future Considerations

- Integration with precision agriculture systems for automated recommendations
- IoT-enabled soil sensors for continuous monitoring beyond point-in-time testing
- Machine learning models for predictive soil health assessment
- Blockchain for immutable record of soil quality over time
- Carbon credit monitoring through soil organic matter tracking

---

## 9. Developer Notes

### 9.1 Protocol Implementation Guidelines

- Use Beckn protocol v1.1.0 or higher for all API implementations
- Implement proper error handling with standardized error codes
- All timestamps should follow ISO 8601 format (YYYY-MM-DDTHH:MM:SS+TZ)
- Sign and validate payloads using Beckn signing policies (BLSC)
- Implement retry and idempotency mechanisms for network resilience
- Ensure backward compatibility where required
- Cache appropriate responses to minimize network load
- Implement rate limiting to prevent API abuse

### 9.2 Security Best Practices

- Use TLS 1.3 for all API communications
- Implement proper authentication for all endpoints
- Store sensitive farmer data with appropriate encryption
- Use JWE for secure payload transmission when required
- Implement proper role-based access control
- Regular security audits and penetration testing
- Follow OWASP security guidelines for APIs
- Implement proper logging for security monitoring

### 9.3 Performance Considerations

- Optimize search queries for rapid response
- Implement efficient caching strategies
- Design for horizontal scalability
- Set appropriate timeouts for synchronous operations
- Use asynchronous processing for long-running tasks
- Implement efficient database indexing strategies
- Profile and optimize critical API paths
- Plan for seasonal usage spikes

### 9.4 Localization Support

- Implement multilingual support for all user-facing content
- Use Unicode for text handling
- Support locale-specific date and number formats
- Consider cultural nuances in UI/UX design
- Provide region-specific agricultural terminology

### 9.5 Sample Context Object

```json
{
  "context": {
    "domain": "services:uki",
    "action": "search",
    "core_version": "1.1.0",
    "bap_id": "your-bap-id",
    "bpp_id": "krishi-kendra-bpp",
    "transaction_id": "txn-abc123",
    "message_id": "msg-xyz789",
    "timestamp": "2025-06-03T12:00:00Z",
    "country": "IND",
    "city": "std:080",
    "ttl": "P1D",
    "bap_uri": "https://yourbap.com/beckn",
    "bpp_uri": "https://krishikendra.org/beckn"
  }
}
```

---

## 10. Implementation Roadmap

1. **Requirements Gathering**: Define the business and technical requirements for your BAP/BPP.
2. **Protocol Familiarization**: Study the Beckn protocol and UKI Agri network guidelines.
3. **Architecture Planning**: Design system architecture for scalability, security, and localization.
4. **API Development**: Implement Beckn-compliant APIs for all network interactions.
5. **Testing & Certification**: Thoroughly validate implementation and obtain necessary certifications.
6. **Pilot Launch**: Onboard select farmers and providers for a controlled beta.
7. **Feedback Loop**: Collect feedback, resolve issues, and iterate on features.
8. **Network Expansion**: Expand coverage, integrate additional providers, and enhance feature set.

---

## 11. Compliance Requirements

- Adhere to Beckn protocol v1.1.0 or higher.
- Comply with local agricultural testing standards and certifications.
- Ensure data privacy and protection as per Indian law and best practices.
- Validate digital identity and ensure traceability in all transactions.
- Maintain auditable logs for all service and report transactions for regulatory scrutiny.

---

## 12. Frequently Asked Questions

**Q: Can any soil testing lab join this network?**  
A: Yes, provided they meet the compliance standards and expose Beckn-compliant APIs.

**Q: What languages are supported for farmer interfaces?**  
A: Multilingual support is recommended. All UI content and notifications should be localized to farmer's preferred language.

**Q: What about offline farmers?**  
A: Offline workflows are supported through field agents who interact with the digital platform on the farmer's behalf.

**Q: How is payment handled?**  
A: Multiple payment options are supported, including cash, UPI, cards, and subsidy vouchers.

**Q: How is data privacy ensured?**  
A: All personal and farm data is encrypted and governed by strict access controls as per protocol guidelines.