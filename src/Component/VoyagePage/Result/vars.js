export var bar_x_vars = [
  "voyage_ship__imputed_nationality__name",
  // 'voyage_slaves_numbers__imp_total_num_slaves_disembarked',
  "voyage_ship__rig_of_vessel__name",
  "voyage_outcome__particular_outcome__name",
  "voyage_outcome__outcome_slaves__name",
  "voyage_outcome__outcome_owner__name",
  "voyage_outcome__vessel_captured_outcome__name",
  "voyage_outcome__resistance__name",
  "voyage_itinerary__imp_port_voyage_begin__geo_location__name",
  "voyage_itinerary__imp_region_voyage_begin__geo_location__name",
  "voyage_itinerary__imp_principal_place_of_slave_purchase__geo_location__name",
  "voyage_itinerary__imp_principal_region_of_slave_purchase__geo_location__name",
  "voyage_itinerary__imp_principal_port_slave_dis__geo_location__name",
  "voyage_itinerary__imp_principal_region_slave_dis__geo_location__name",
  "voyage_itinerary__imp_broad_region_slave_dis__geo_location__name",
  "voyage_itinerary__place_voyage_ended__geo_location__name",
  "voyage_itinerary__region_of_return__geo_location__name",
  "voyage_dates__imp_arrival_at_port_of_dis_yyyy",
];

export var bar_y_vars = [
  "voyage_dates__imp_length_home_to_disembark",
  "voyage_dates__length_middle_passage_days",
  "voyage_ship__tonnage_mod",
  "voyage_crew__crew_voyage_outset",
  "voyage_crew__crew_first_landing",
  "voyage_slaves_numbers__imp_total_num_slaves_embarked",
  "voyage_slaves_numbers__imp_total_num_slaves_disembarked",
  "voyage_slaves_numbers__imp_jamaican_cash_price",
];

export var donut_value_vars = [
  "voyage_dates__imp_length_home_to_disembark",
  "voyage_dates__length_middle_passage_days",
  "voyage_ship__tonnage_mod",
  "voyage_crew__crew_voyage_outset",
  "voyage_crew__crew_first_landing",
  "voyage_slaves_numbers__imp_total_num_slaves_embarked",
  "voyage_slaves_numbers__imp_total_num_slaves_disembarked",
  "voyage_slaves_numbers__imp_jamaican_cash_price",
];

export var donut_name_vars = [
  "voyage_ship__imputed_nationality__name",
  "voyage_ship__rig_of_vessel__name",
  "voyage_outcome__particular_outcome__name",
  "voyage_outcome__outcome_slaves__name",
  "voyage_outcome__outcome_owner__name",
  "voyage_outcome__vessel_captured_outcome__name",
  "voyage_outcome__resistance__name",
  "voyage_itinerary__imp_port_voyage_begin__geo_location__name",
  "voyage_itinerary__imp_region_voyage_begin__geo_location__name",
  "voyage_itinerary__imp_principal_place_of_slave_purchase__geo_location__name",
  "voyage_itinerary__imp_principal_region_of_slave_purchase__geo_location__name",
  "voyage_itinerary__imp_principal_port_slave_dis__geo_location__name",
  "voyage_itinerary__imp_principal_region_slave_dis__geo_location__name",
  "voyage_itinerary__imp_broad_region_slave_dis__geo_location__name",
  "voyage_itinerary__place_voyage_ended__geo_location__name",
  "voyage_itinerary__region_of_return__geo_location__name",
];

export var scatter_plot_x_vars = [
  "voyage_dates__imp_arrival_at_port_of_dis_yyyy",
  "voyage_dates__imp_length_home_to_disembark",
  "voyage_dates__length_middle_passage_days",
  "voyage_crew__crew_voyage_outset",
  "voyage_crew__crew_first_landing",
  "voyage_slaves_numbers__imp_total_num_slaves_embarked",
  "voyage_slaves_numbers__imp_total_num_slaves_disembarked",
];

export var scatter_plot_y_vars = [
  "voyage_slaves_numbers__imp_total_num_slaves_embarked",
  "voyage_slaves_numbers__imp_total_num_slaves_disembarked",
  // "voyage_slaves_numbers__percentage_female",
  // "voyage_slaves_numbers__percentage_male",
  // "voyage_slaves_numbers__percentage_child",
  // "voyage_slaves_numbers__percentage_men_among_embarked_slaves",
  "voyage_slaves_numbers__percentage_women_among_embarked_slaves",
  "voyage_slaves_numbers__imp_mortality_ratio",
  "voyage_slaves_numbers__imp_jamaican_cash_price",
  // "voyage_slaves_numbers__percentage_boys_among_embarked_slaves",
  // "voyage_slaves_numbers__percentage_girls_among_embarked_slaves",
  "voyage_ship__tonnage_mod",
  "voyage_crew__crew_voyage_outset",
  "voyage_crew__crew_first_landing",
];

// export const idxRelation = {
//   "Ship nation owner": 0,
//   Outcome: 1,
//   Itinerary: 2,
//   Dates: 3,
//   "Captain and crew": 4,
//   Slave: 5,
//   Source: 6,
// };

// export const modalVars = [
//   "voyage_id",
//   "voyage_ship__imputed_nationality__name",
//   "voyage_outcome__outcome_owner__name",
//   "voyage_outcome__vessel_captured_outcome__name",
//   "voyage_outcome__outcome_slaves__name",
//   "voyage_outcome__particular_outcome__name",
//   "voyage_outcome__resistance__name",
//   "voyage_itinerary__first_landing_place__geo_location__name",
//   "voyage_itinerary__first_place_slave_purchase__geo_location__name",
//   "voyage_itinerary__imp_port_voyage_begin__geo_location__name",
//   "voyage_itinerary__imp_principal_place_of_slave_purchase__geo_location__name",
//   "voyage_itinerary__imp_principal_port_slave_dis__geo_location__name",
//   "voyage_itinerary__imp_region_voyage_begin__geo_location__name",
//   "voyage_itinerary__imp_broad_region_voyage_begin__geo_location__name",
//   "voyage_itinerary__port_of_departure__geo_location__name",
//   "voyage_itinerary__principal_place_of_slave_purchase__geo_location__name",
//   "voyage_itinerary__principal_port_of_slave_dis__geo_location__name",
//   "voyage_itinerary__place_voyage_ended__geo_location__name",
//   "voyage_itinerary__port_of_call_before_atl_crossing__geo_location__name",
//   "voyage_itinerary__second_landing_place__geo_location__name",
//   "voyage_itinerary__second_place_slave_purchase__geo_location__name",
//   "voyage_itinerary__third_landing_place__geo_location__name",
//   "voyage_itinerary__third_place_slave_purchase__geo_location__name",
//   "voyage_dates__imp_arrival_at_port_of_dis_yyyy",
//   "voyage_captainconnection__captain__name",
//   "voyage_slaves_numbers__imp_total_num_slaves_embarked",
//   "voyage_slaves_numbers__imp_total_num_slaves_disembarked",
//   "voyage_slaves_numbers__imp_mortality_during_voyage",
//   "voyage_slaves_numbers__imp_mortality_ratio",
//   "voyage_slaves_numbers__percentage_boys_among_embarked_slaves",
//   "voyage_slaves_numbers__child_ratio_among_embarked_slaves",
//   "voyage_slaves_numbers__percentage_girls_among_embarked_slaves",
//   "voyage_slaves_numbers__male_ratio_among_embarked_slaves",
//   "voyage_slaves_numbers__percentage_men_among_embarked_slaves",
//   "voyage_slaves_numbers__percentage_women_among_embarked_slaves",
//   "voyage_slaves_numbers__imp_jamaican_cash_price",
//   "voyage_sourceconnection__source__full_ref",
// ];

// the info in the modal, you can exchange the rows in the modal by exchanging ones in skeleton
// export const skeleton = {
//   "Ship nation owner": ["voyage_id", "voyage_ship__imputed_nationality__name"],
//   Outcome: [
//     "voyage_outcome__outcome_owner__name",
//     "voyage_outcome__vessel_captured_outcome__name",
//     "voyage_outcome__outcome_slaves__name",
//     "voyage_outcome__particular_outcome__name",
//     "voyage_outcome__resistance__name",
//   ],
//   Itinerary: [
//     "voyage_itinerary__first_landing_place__geo_location__name",
//     "voyage_itinerary__first_place_slave_purchase__geo_location__name",
//     "voyage_itinerary__imp_port_voyage_begin__geo_location__name",
//     "voyage_itinerary__imp_principal_place_of_slave_purchase__geo_location__name",
//     "voyage_itinerary__imp_principal_port_slave_dis__geo_location__name",
//     "voyage_itinerary__imp_region_voyage_begin__geo_location__name",
//     "voyage_itinerary__imp_broad_region_voyage_begin__geo_location__name",
//     "voyage_itinerary__port_of_departure__geo_location__name",
//     "voyage_itinerary__principal_place_of_slave_purchase__geo_location__name",
//     "voyage_itinerary__principal_port_of_slave_dis__geo_location__name",
//     "voyage_itinerary__place_voyage_ended__geo_location__name",
//     "voyage_itinerary__port_of_call_before_atl_crossing__geo_location__name",
//     "voyage_itinerary__second_landing_place__geo_location__name",
//     "voyage_itinerary__second_place_slave_purchase__geo_location__name",
//     "voyage_itinerary__third_landing_place__geo_location__name",
//     "voyage_itinerary__third_place_slave_purchase__geo_location__name",
//   ],
//   Dates: ["voyage_dates__imp_arrival_at_port_of_dis_yyyy"],
//   "Captain and crew": ["voyage_captainconnection__captain__name"],
//   Slave: [
//     "voyage_slaves_numbers__imp_total_num_slaves_embarked",
//     "voyage_slaves_numbers__imp_total_num_slaves_disembarked",
//     "voyage_slaves_numbers__imp_mortality_during_voyage",
//     "voyage_slaves_numbers__imp_mortality_ratio",
//     "voyage_slaves_numbers__percentage_boys_among_embarked_slaves",
//     "voyage_slaves_numbers__child_ratio_among_embarked_slaves",
//     "voyage_slaves_numbers__percentage_girls_among_embarked_slaves",
//     "voyage_slaves_numbers__male_ratio_among_embarked_slaves",
//     "voyage_slaves_numbers__percentage_men_among_embarked_slaves",
//     "voyage_slaves_numbers__percentage_women_among_embarked_slaves",
//     "voyage_slaves_numbers__imp_jamaican_cash_price",
//   ],
//   Source: ["voyage_sourceconnection__source__full_ref"],
// };

export var pivot_row_vars = [
  "voyage_ship__imputed_nationality__name",
  "voyage_itinerary__imp_broad_region_voyage_begin__geo_location__name",
  "voyage_itinerary__imp_region_voyage_begin__geo_location__name",
  "voyage_itinerary__imp_port_voyage_begin__geo_location__name",
  "voyage_itinerary__imp_principal_region_of_slave_purchase__geo_location__name",
  "voyage_itinerary__imp_principal_place_of_slave_purchase__geo_location__name",
  "voyage_itinerary__imp_broad_region_of_slave_purchase__geo_location__name",
  "voyage_itinerary__imp_principal_region_slave_dis__geo_location__name",
  "voyage_itinerary__imp_broad_region_slave_dis__geo_location__name",
  "voyage_itinerary__imp_principal_port_slave_dis__geo_location__name",
  // "voyage_dates__imp_arrival_at_port_of_dis_yyyy",
];

export var pivot_col_vars = [
  "voyage_ship__imputed_nationality__name",
  "voyage_itinerary__imp_broad_region_voyage_begin__geo_location__name",
  "voyage_itinerary__imp_region_voyage_begin__geo_location__name",
  "voyage_itinerary__imp_port_voyage_begin__geo_location__name",
  "voyage_itinerary__imp_principal_region_of_slave_purchase__geo_location__name",
  "voyage_itinerary__imp_principal_place_of_slave_purchase__geo_location__name",
  "voyage_itinerary__imp_broad_region_of_slave_purchase__geo_location__name",
  "voyage_itinerary__imp_principal_region_slave_dis__geo_location__name",
  "voyage_itinerary__imp_broad_region_slave_dis__geo_location__name",
  "voyage_itinerary__imp_principal_port_slave_dis__geo_location__name",
  // "voyage_dates__imp_arrival_at_port_of_dis_yyyy",
];

export var pivot_cell_vars = [
  "voyage_slaves_numbers__imp_total_num_slaves_disembarked",
  "voyage_slaves_numbers__imp_total_num_slaves_embarked",
  "voyage_slaves_numbers__percentage_female",
  "voyage_slaves_numbers__percentage_male",
  "voyage_slaves_numbers__percentage_child",
  "voyage_slaves_numbers__imp_mortality_ratio",
  "voyage_slaves_numbers__imp_jamaican_cash_price",
  "voyage_ship__tonnage_mod", 
  "voyage_dates__length_middle_passage_days",
];
