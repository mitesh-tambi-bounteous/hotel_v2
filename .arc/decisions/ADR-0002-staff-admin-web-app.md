---
id: ADR-0002
category: component
title: Staff Admin Web App
status: accepted
superseded_by: null
component_id: comp_staff_admin_web_app
responsibility: Internal web app for hotel staff to manage rooms, bookings, and rates.
kind: web_ui
split_reason: "Separate client/runtime from the guest site \u2014 internal staff tool\
  \ with different auth/permissions."
talks_to:
- component_id: comp_staff_bff
  interaction: sync
  evidence: 'Human: ''Separate gateway/BFF per client'''
evidence: "Human: 'Both \u2014 separate guest site and staff admin'"
---

## Context

Human: 'Both — separate guest site and staff admin'

## Decision

Internal web app for hotel staff to manage rooms, bookings, and rates.

Kept separate because Separate client/runtime from the guest site — internal staff tool with different auth/permissions..

## Talks to

- **Staff BFF** (sync) — Human: 'Separate gateway/BFF per client'
