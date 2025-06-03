# Krishi Soil Testing – Beckn Protocol Agri Use Case Implementation Guide

---

## Overview

This repository provides an implementation blueprint for integrating agricultural service platforms (BAP/BPP) with the Unified Krishi Interface (UKI) open network, powered by the Beckn Protocol. The use case demonstrated here is Soil Testing, enabling seamless discovery, booking, and fulfillment of soil testing services for farmers.

## Table of Contents

- [1. Introduction](#1-introduction)
- [2. Key Entities & Roles](#2-key-entities--roles)
- [3. Network Roles: BAP & BPP](#3-network-roles-bap--bpp)
- [4. Soil Testing Journey (DOFP)](#4-soil-testing-journey-dofp)
- [5. API Sequence & Payloads](#5-api-sequence--payloads)
- [6. Workflows](#6-workflows)
- [7. Taxonomy & Tags](#7-taxonomy--tags)
- [8. Assumptions & Challenges](#8-assumptions--challenges)
- [9. Developer Notes](#9-developer-notes)

---

## 1. Introduction

This guide is designed for developers who wish to join and integrate with the Beckn-enabled UKI Agri network, focusing on the soil testing use case. By following this guide, you can build compliant Beckn Applications (BAP) or Beckn Provider Platforms (BPP) that enable farmers to access high-quality soil testing services.

---

## 2. Key Entities & Roles

| Entity                  | Description                                               | Possible Role in Network |
|-------------------------|-----------------------------------------------------------|-------------------------|
| **Farmer**              | Seeks soil testing services                               | BAP User                |
| **Aggregator**          | Facilitates access to multiple testing providers          | BAP or BPP              |
| **Service Provider**    | Offers soil testing services (e.g., Krishi Kendra)        | BPP                     |
| **Extension Agent**     | Assists farmers with sample collection and interpretation | BAP/BPP (optional)      |

---

## 3. Network Roles: BAP & BPP

**Beckn Application Platform (BAP):**
- Acts as a consumer-facing app (used by farmers like Smita).
- Facilitates discovery, ordering, and interaction with service providers.

**Beckn Provider Platform (BPP):**
- Represents service providers (e.g., Krishi Kendra Soil Services).
- Handles offers, order management, fulfillment, and post-fulfillment actions.

---

## 4. Soil Testing Journey (DOFP)

### Discovery

1. Farmer searches for soil testing services via BAP.
2. BAP sends a `search` API request to the network.
3. Multiple BPPs respond with available services (location, experience, rating, cost, slots, tests offered, etc.).

### Order

4. Farmer selects a provider, reviews prerequisites, and confirms order/payment (e.g., Cash on Delivery).
5. BAP sends a `select` and `init` API call to chosen BPP.
6. BPP confirms booking with available slots, agent details, and order ID.

### Fulfillment

7. For on-farm collection: Service provider agent visits farm, collects sample, and updates status.
8. For centre drop-off: Farmer delivers sample, provider updates status.
9. Farmer pays provider.

### Post-Fulfillment

10. Farmer receives a test report (PDF/media) and recommendations.
11. Farmer rates the service; provider can reply/request feedback.
12. Support and escalation options are available.

---

## 5. API Sequence & Payloads

### 5.1. API Call Sequence

```text
search → on_search → select → on_select → init → on_init → confirm → on_confirm → status → on_status → tracking → on_tracking → update → on_update → support → on_support → rating → on_rating
```

### 5.2. Sample Request & Response Payloads

#### 5.2.1. Search Soil Testing Centres

**Request:**  
`POST /search`
```json
{
  "context": {
    "domain": "beckn.org/agri-soil_testing",
    "action": "search",
    "bap_id": "farmer-app.uki",
    "transaction_id": "txn-12345",
    "country": "IND",
    "city": "std:080"
  },
  "message": {
    "intent": {
      "service": "soil_testing",
      "location": {
        "gps": "19.9975,73.7898"
      },
      "filters": {
        "required_tests": ["npk", "ph", "oc"],
        "collection_type": "farm_pickup"
      }
    }
  }
}
```

**Response:**  
`on_search`
```json
{
  "context": { /* ... */ },
  "message": {
    "catalog": [
      {
        "id": "krishi-kendra-1",
        "provider": {
          "name": "Krishi Kendra Soil Services",
          "rating": 4.8,
          "experience": "10 years",
          "location": "Nashik",
          "available_slots": ["2025-06-06T09:00", "2025-06-06T16:00"],
          "collection_types": ["farm_pickup", "centre_dropoff"],
          "cost": 350,
          "tests_offered": ["npk", "ph", "oc", "ec", "micronutrients"],
          "prerequisites": [
            "Soil to be collected from 5 random spots",
            "Do not use metal containers"
          ],
          "terms": {
            "cancellation_policy": "Full refund before pickup",
            "refund_policy": "No refund after sample collection"
          }
        }
      }
    ]
  }
}
```

#### 5.2.2. Select Service & Confirm Order

`POST /select`
```json
{
  "context": { /* ... */ },
  "message": {
    "order": {
      "provider_id": "krishi-kendra-1",
      "service": "soil_testing",
      "collection_type": "farm_pickup",
      "slot": "2025-06-06T09:00"
    }
  }
}
```

`on_select` returns order summary & quote.

---

#### 5.2.3. Confirm & Fulfill

`POST /confirm`
```json
{
  "context": { /* ... */ },
  "message": {
    "order": {
      "order_id": "order-7890",
      "payment_type": "COD"
    }
  }
}
```

`on_confirm` response includes assigned agent, expected pickup time, and order tracking info.

---

#### 5.2.4. Status & Report

`GET /status?order_id=order-7890`

Returns:
```json
{
  "context": { /* ... */ },
  "message": {
    "order_status": "Sample Collected",
    "updates": [
      {"event": "Agent en route", "timestamp": "2025-06-06T08:30"},
      {"event": "Sample collected", "timestamp": "2025-06-06T09:15"}
    ]
  }
}
```

`on_status` eventually includes report download URLs (PDF, media).

---

#### 5.2.5. Rating

`POST /rating`
```json
{
  "context": { /* ... */ },
  "message": {
    "order_id": "order-7890",
    "rating": {
      "service_quality": 5,
      "provider_behavior": 5,
      "support": 4,
      "comments": "Prompt and professional service."
    }
  }
}
```

---

## 6. Workflows

### Simplified DOFP Flow

1. **Discovery:** Farmer (BAP) → Network → Service Providers (BPP)
2. **Order:** Farmer (BAP) selects & confirms booking → BPP
3. **Fulfillment:** Service provider (BPP) updates status, delivers service
4. **Post-fulfillment:** Farmer (BAP) receives report, gives feedback

---

## 7. Taxonomy & Tags

- **Collection Types:** `farm_pickup`, `centre_dropoff`
- **Required Tests:** `npk`, `ph`, `oc`, `ec`, `micronutrients`, `soil_texture`, etc.
- **Payment Methods:** `COD`, `UPI`, `Card`
- **Order Status:** `Pending`, `Confirmed`, `Agent en route`, `Sample collected`, `Testing in progress`, `Report ready`
- **Rating Metrics:** `service_quality`, `provider_behavior`, `support`

---

## 8. Assumptions & Challenges

- **Interoperability:** Interfaces are Beckn-compliant; all BAPs/BPPs must adhere to protocol.
- **Localization:** Multilingual support for search and instructions.
- **Network Reliability:** Agents/providers must update order status in real time.
- **Data Privacy:** Farmer and sample data are protected as per local norms.
- **Payment:** Cash on delivery is default; digital options may be added.
- **Report Delivery:** PDF/media links shared via BAP.

---

## 9. Developer Notes

- Use Beckn protocol v1.0+ (or as per UKI guidelines).
- Refer to [Beckn documentation](https://becknprotocol.io/) for detailed API schemas.
- All timestamps must be ISO 8601.
- Ensure retry logic for API failures.
- Validate all user data before order confirmation.
- Security: Sign all payloads as per Beckn security standards.

---

## Example BAP/BPP JSON Structs

### Context Object

```json
{
  "context": {
    "domain": "beckn.org/agri-soil_testing",
    "action": "search",
    "core_version": "1.1.0",
    "bap_id": "your-bap-id",
    "bpp_id": "krishi-kendra-bpp",
    "transaction_id": "txn-abc123",
    "message_id": "msg-xyz789",
    "timestamp": "2025-06-03T12:00:00Z",
    "country": "IND",
    "city": "std:080"
  }
}
```

### Order Struct

```json
{
  "order": {
    "order_id": "order-7890",
    "provider_id": "krishi-kendra-1",
    "service": "soil_testing",
    "collection_type": "farm_pickup",
    "scheduled_slot": "2025-06-06T09:00",
    "customer_info": {
      "name": "Smita",
      "contact": "+919812345678",
      "location": {
        "gps": "19.9975,73.7898",
        "address": "Nashik, Maharashtra"
      }
    },
    "payment": {
      "type": "COD",
      "amount": 350
    },
    "status": "Confirmed"
  }
}
```

---

## References

- [Beckn Protocol Official Documentation](https://becknprotocol.io/)
- [Unified Krishi Interface (UKI) Overview](https://uki.network/)
- [Open APIs for Agri Use Cases](https://github.com/beckn/beckn-protocol-specs)

---