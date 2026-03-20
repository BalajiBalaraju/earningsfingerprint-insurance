# EarningsFingerprint Insurance

## Problem

Delivery partners working with platforms like Zepto and Blinkit depend on daily earnings.  
However, their income is highly unpredictable.

Whenever there is heavy rain, extreme heat, high pollution, or even platform downtime, they are unable to work. This directly affects their income.

Currently, there is no simple system that protects them from this kind of income loss.

---

## Our Idea

We wanted to build a system that is simple, fair, and automatic.

Instead of giving the same fixed payout to every worker during a disruption, we calculate how much income that specific worker actually loses.

This idea is called **EarningsFingerprint Insurance**.

---

## What is EarningsFingerprint?

Every worker has a different earning pattern.

For example:
- One worker may earn ₹800 per day  
- Another may earn ₹1200 per day  

If both face the same disruption, they should not receive the same payout.

We calculate a worker’s average hourly income (based on past data) and use it to determine their compensation.

This makes the system:
- Fair  
- Personalized  
- Practical  

---

## How it works

The flow of the system is simple:

1. A worker signs up and gets covered under a plan  
2. The system calculates their average hourly income  
3. A disruption occurs (rain, heat, AQI, etc.)  
4. The system detects the event  
5. It calculates how many hours were affected  
6. The payout is automatically calculated  
7. The worker receives compensation instantly  

No claims. No paperwork.

---

## Payout Formula

Payout = Avg Hourly Income × Disruption Hours

### Example

If a worker earns ₹100 per hour  
and loses 4 hours due to rain:

Payout = ₹100 × 4 = ₹400  

This ensures that the payout matches the actual income loss.

---

## Why this is different

Most systems provide a fixed payout to everyone.

In our system:
- Each worker gets a different payout  
- The payout is based on their actual earning pattern  
- Everything happens automatically  

---

## Features (Phase 1 Demo)

- Worker profile with earning details  
- Trigger simulation (Rain, Heat, AQI, Downtime)  
- Automatic payout calculation  
- Clear UI showing personalized compensation  
- No backend required (frontend prototype)

---

## Tech Stack

- Frontend: React (via CDN)
- Styling: CSS
- Logic: JavaScript (React)
- APIs: Simulated for demo

---

## Current Status

This is a Phase 1 prototype.

It demonstrates:
- The core idea  
- The payout logic  
- The user flow  

Future versions will include real APIs, backend integration, and data-driven models.

---

## Goal

The goal of this project is to create a simple and fair income protection system for gig workers.

We aim to provide a safety net that works automatically and reflects real income loss.
