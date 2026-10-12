# UI Guidelines — Hotel V2

This product ships two separate web apps (guest site and staff admin), each with its own
runtime, but they share this one visual language so the brand feels like a single product.

## Navigation & information architecture

- **Guest web app**: top bar only (logo, Rooms, My Bookings, Account) — guests complete short,
  linear flows (browse → book → manage stay), not deep hierarchies, so a persistent sidebar
  would waste space on content they rarely revisit.
- **Staff admin web app**: left sidebar (Rooms, Bookings, Rates, Guests) with a slim top bar for
  account/search — staff work across many sections in one session, so a persistent sidebar beats
  re-navigating a top bar for every task switch.

## Layout & density

- Staff admin is data-dense: tables are the default for any list the staff will scan or sort
  (bookings, rooms, rates), because staff need to compare many records at a glance.
  Use `.card` only to group a handful of related fields (e.g. a single booking's detail panel),
  not to wrap tabular data.
  Standard breakpoint: collapse the sidebar to icons under 1024px, since admin is primarily used
  on laptop/desktop displays.
- The guest app is spacious and card-based: rooms and bookings render as `.card` grids, not
  tables, because guests are scanning a handful of options, not auditing records.
  Standard breakpoint: single-column below 640px, since a meaningful share of guest traffic is
  mobile.

## Component usage

- `.btn-primary` for the one key action per screen (Book, Save, Confirm) — a single clear
  primary action reduces decision friction in booking and admin-write flows alike.
- `.btn-secondary` for alternate or cancel actions, `.btn-danger` only for destructive actions
  (cancel booking, delete rate) so destructive intent is visually distinct from default actions.
- `.chip` for status (Confirmed, Checked-in, Vacant) wherever it appears in a table row or card,
  so status is scannable without reading full text.
- `.field` / `.field-input` for every form control in both apps, so booking forms and admin
  forms feel like the same product.

## Theme

- Light theme only, for both apps. Hotel staff work in well-lit front-desk and back-office
  environments and guests browse in short sessions, so dark mode adds maintenance cost without
  a clear need today.

## Voice & tone

- Guest-facing copy: warm and plain ("Your room is ready", not "Reservation status: READY") —
  guests are customers, not operators, and should never read system/internal language.
- Staff admin copy: terse and operational ("Save rate", "3 rooms unassigned") — staff value speed
  over friendliness during repetitive daily tasks.
