---
id: ADR-0006
category: component
title: Staff BFF
status: accepted
superseded_by: null
component_id: comp_staff_bff
responsibility: "API gateway/BFF in front of the Hotel API for the staff admin app\
  \ \u2014 enforces internal staff auth and request shaping."
kind: api_service
split_reason: "Security/auth boundary \u2014 internal staff traffic has different\
  \ auth rules than public guest traffic."
talks_to:
- component_id: comp_hotel_api
  interaction: sync
  evidence: Staff BFF forwards requests to the Hotel API
evidence: 'Human: ''Separate gateway/BFF per client'''
---

## Context

Human: 'Separate gateway/BFF per client'

## Decision

API gateway/BFF in front of the Hotel API for the staff admin app — enforces internal staff auth and request shaping.

Kept separate because Security/auth boundary — internal staff traffic has different auth rules than public guest traffic..

## Talks to

- **Hotel API** (sync) — Staff BFF forwards requests to the Hotel API
