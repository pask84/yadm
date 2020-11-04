var PresetsImages = ["green","blue","violet","orange"];
var PresetsSounds = ["bubble.mp3","crash.mp3","digivice_sound_chat.mp3","electric_bass_scrape_up.mp3","school_bell.mp3","sudden_epik.mp3"
					,"funk_guitar_riff_with_wah_.mp3","synthesizer_modulation_wheel_movements.mp3","synthesizer_pitch_bend_wheel_bend_and_release.mp3",
					"human_beatbox_closed_hi_hat.mp3","human_beatbox_open_hi_hat.mp3","human_beatbox_snare_drum.mp3","human_beatbox_kick_drum.mp3"
					,"scratch_1.mp3","scratch_2.mp3","musical_organ_blues_riff.mp3","musical_piano_strings_stab_minor.mp3","musical_xylophone_run_slide.mp3"];


var preset1 = [{"color":"green","sound":"bubble.mp3"},
			   {"color":"orange","sound":"digivice_sound_chat.mp3"},
			   {"color":"blue","sound":"electric_bass_scrape_up.mp3"},
			   {"color":"violet","sound":"school_bell.mp3"},
				{"color":"blue","sound":"sudden_epik.mp3"},
				{"color":"blue","sound":"crash.mp3"},
				{"color":"green","sound":"funk_guitar_riff_with_wah_.mp3"},
				{"color":"blue","sound":"synthesizer_modulation_wheel_movements.mp3"},
				{"color":"blue","sound":"synthesizer_pitch_bend_wheel_bend_and_release.mp3"},
				{"color":"green","sound":"human_beatbox_closed_hi_hat.mp3"},
				{"color":"green","sound":"human_beatbox_open_hi_hat.mp3"},
				{"color":"green","sound":"human_beatbox_snare_drum.mp3"},
				{"color":"green","sound":"human_beatbox_kick_drum.mp3"},
				{"color":"blue","sound":"scratch_1.mp3"},
				{"color":"blue","sound":"scratch_2.mp3"},
				{"color":"orange","sound":"musical_organ_blues_riff.mp3"},
				{"color":"orange","sound":"musical_piano_strings_stab_minor.mp3"},
				{"color":"orange","sound":"musical_xylophone_run_slide.mp3"},
				{"color":"green","sound":"bubble.mp3"},
				{"color":"blue","sound":"crash.mp3"},
				{"color":"violet","sound":"school_bell.mp3"},
				{"color":"green","sound":"bubble.mp3"},
				{"color":"violet","sound":"school_bell.mp3"},
				{"color":"blue","sound":"crash.mp3"}];


function getPreset(name){
	return eval(name);
}
