import { FeatureGroup } from "./featureGroup"

export type User = {
    email_address: string,
    phone_number: string,
    can_reserve_group_sessions: boolean,
    date_of_next_vpa: string,
    purchased_tutoring_credits: number,
    tutoring_credits_used: number,
    expiration_date: string,
    last_name: string,
    level: string,
    tutoring_credits: number,
    date_joined: string,
    native_language: string,
    first_name: string,
    segments: unknown,
    access_type: string,
    feature_group: FeatureGroup
  }