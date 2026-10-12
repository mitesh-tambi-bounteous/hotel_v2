---
id: ADR-0001
category: component
title: Guest Web App
status: accepted
superseded_by: null
component_id: comp_guest_web_app
responsibility: Public-facing site for guests to browse rooms, book, and manage their
  stay at the property.
kind: web_ui
split_reason: "Separate client/runtime from staff admin and from the backend API \u2014\
  \ guests and staff are different user populations with different auth needs."
talks_to:
- component_id: comp_guest_bff
  interaction: sync
  evidence: 'Human: ''Separate gateway/BFF per client'''
evidence: "Human: 'Both \u2014 separate guest site and staff admin'"
---

## Context

Human: 'Both — separate guest site and staff admin'

## Decision

Public-facing site for guests to browse rooms, book, and manage their stay at the property.

Kept separate because Separate client/runtime from staff admin and from the backend API — guests and staff are different user populations with different auth needs..

## Talks to

- **Guest BFF** (sync) — Human: 'Separate gateway/BFF per client'
