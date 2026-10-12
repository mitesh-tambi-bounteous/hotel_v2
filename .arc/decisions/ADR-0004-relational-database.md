---
id: ADR-0004
category: component
title: Relational Database
status: accepted
superseded_by: null
component_id: comp_relational_database
responsibility: "Stores rooms, bookings, rates, and guest/staff data; runs on Amazon\
  \ RDS (Postgres or MySQL \u2014 engine TBD)."
kind: managed_service
split_reason: Backing service the project uses but doesn't build.
evidence: "Human: 'Relational \u2014 Amazon RDS (Postgres/MySQL)'"
---

## Context

Human: 'Relational — Amazon RDS (Postgres/MySQL)'

## Decision

Stores rooms, bookings, rates, and guest/staff data; runs on Amazon RDS (Postgres or MySQL — engine TBD).

Kept separate because Backing service the project uses but doesn't build..
