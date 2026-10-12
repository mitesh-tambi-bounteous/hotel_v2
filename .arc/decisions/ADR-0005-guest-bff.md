---
id: ADR-0005
category: component
title: Guest BFF
status: accepted
superseded_by: null
component_id: comp_guest_bff
responsibility: "API gateway/BFF in front of the Hotel API for the guest site \u2014\
  \ enforces public-guest auth and request shaping."
kind: api_service
split_reason: "Security/auth boundary \u2014 public guest traffic has different auth\
  \ rules than internal staff traffic."
talks_to:
- component_id: comp_hotel_api
  interaction: sync
  evidence: Guest BFF forwards requests to the Hotel API
evidence: 'Human: ''Separate gateway/BFF per client'''
---

## Context

Human: 'Separate gateway/BFF per client'

## Decision

API gateway/BFF in front of the Hotel API for the guest site — enforces public-guest auth and request shaping.

Kept separate because Security/auth boundary — public guest traffic has different auth rules than internal staff traffic..

## Talks to

- **Hotel API** (sync) — Guest BFF forwards requests to the Hotel API
