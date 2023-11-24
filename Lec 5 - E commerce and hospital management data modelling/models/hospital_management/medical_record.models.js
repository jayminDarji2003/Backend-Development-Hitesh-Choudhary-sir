import mongoose from "mongoose"

const medicalRecordSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    patientInfo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient"
    },
    doctorInfo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor"
    }
}, { timestamps: true })

export const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordSchema)