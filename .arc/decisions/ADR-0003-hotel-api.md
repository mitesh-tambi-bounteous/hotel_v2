---
id: ADR-0003
category: component
title: Hotel API
status: accepted
superseded_by: null
component_id: comp_hotel_api
responsibility: Single backend API serving both the guest site and staff admin app
  for a single hotel property.
kind: api_service
split_reason: "Single property, single domain \u2014 one API serves both clients until\
  \ a driver requires otherwise."
talks_to:
- component_id: comp_relational_database
  interaction: shared-storage
  evidence: Hotel API persists rooms/bookings/rates in the relational database
evidence: 'Human: ''a single property hotel web application'''
---

## Context

Human: 'a single property hotel web application'

## Decision

Single backend API serving both the guest site and staff admin app for a single hotel property.

Kept separate because Single property, single domain — one API serves both clients until a driver requires otherwise..

## Talks to

- **Relational Database** (shared-storage) — Hotel API persists rooms/bookings/rates in the relational database
