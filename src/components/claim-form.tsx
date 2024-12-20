"use client"

import { useState, useRef, ChangeEvent } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Calculator, MapPin, Languages, FileText, Upload, Plus } from 'lucide-react'

export function ClaimForm() {
  const [formData, setFormData] = useState({
    contractValue: "",
    claimValue: "",
    currency: "USD",
    place: "",
    isPlaceFromAgreement: null,
    language: "",
    isLanguageFromAgreement: null,
    statement: "",
  })

  const [files, setFiles] = useState({
    statement: null,
    contract: null,
    arbitrationAgreement: null,
    additionalDocument: null,
  })

  const fileInputRefs = {
    statement: useRef<HTMLInputElement>(null),
    contract: useRef<HTMLInputElement>(null),
    arbitrationAgreement: useRef<HTMLInputElement>(null),
    additionalDocument: useRef<HTMLInputElement>(null),
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))

    if (name === 'contractValue') {
      const claimValue = parseFloat(value) * 1.5
      setFormData(prev => ({ ...prev, claimValue: claimValue.toFixed(2) }))
    }
  }

  const handleRadioChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value === 'yes' }))
  }

  const handleFileUpload = (name: string, file: File | null) => {
    if (file && file.type === 'application/pdf') {
      setFiles(prev => ({ ...prev, [name]: file }))
    } else {
      alert('Please upload a PDF file')
    }
  }

  const triggerFileInput = (name: string) => {
    fileInputRefs[name as keyof typeof fileInputRefs].current?.click()
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-1 md:p-8 w-full">
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex flex-1 justify-start gap-2 items-baseline">
            <h2 className="text-xl font-semibold">File your Claim.</h2>
            <p className="text-gray-500 text-sm">(Approx 5 Minutes)</p>
          </div>
          <div className="h-px bg-gray-200 w-full"></div>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {/* Claim Value Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-blue-600 font-medium">
              <Calculator className="w-5 h-5" />
              Claim Value
            </div>
            <div className="space-y-4">
              <div>
                <Label>Contract Value</Label>
                <div className="flex gap-2">
                  <Input
                    type="number"
                    name="contractValue"
                    value={formData.contractValue}
                    onChange={handleInputChange}
                    placeholder="10,00.00"
                    className="flex-1 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-200"
                  />
                  <select
                    name="currency"
                    value={formData.currency}
                    onChange={handleInputChange}
                    className="w-24 rounded-md border border-input bg-background px-3"
                  >
                    <option>USD</option>
                    <option>EUR</option>
                    <option>GBP</option>
                  </select>
                </div>
              </div>
              <div>
                <Label className="from-neutral-500">Claim Value</Label>
                <div className="flex gap-2">
                  <Input
                    type="number"
                    name="claimValue"
                    value={formData.claimValue}
                    onChange={handleInputChange}
                    placeholder="15,00.00"
                    className="flex-1"
                    readOnly
                  />
                  <select
                    name="currency"
                    value={formData.currency}
                    onChange={handleInputChange}
                    className="w-24 rounded-md border border-input bg-background px-3"
                  >
                    <option>USD</option>
                    <option>EUR</option>
                    <option>GBP</option>
                  </select>
                </div>
                <p className="text-orange-500 text-sm mt-1">150% of Contract Value</p>
              </div>
            </div>
          </div>

          {/* Place Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-blue-600 font-medium">
              <MapPin className="w-5 h-5" />
              Place
            </div>
            <div>
              <Input
                type="text"
                name="place"
                value={formData.place}
                onChange={handleInputChange}
                placeholder="Select the Place for proceedings"
              />
              <p className="text-sm text-gray-600 mb-4 mt-3">
                Is the place for the proceedings the one mentioned in the agreement?
              </p>
              <RadioGroup
                value={formData.isPlaceFromAgreement === null ? "" : formData.isPlaceFromAgreement ? "yes" : "no"}
                onValueChange={(value) => handleRadioChange("isPlaceFromAgreement", value)}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="yes-place" />
                  <Label htmlFor="yes-place">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no-place" />
                  <Label htmlFor="no-place">No</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          {/* Language Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-blue-600 font-medium">
              <Languages className="w-5 h-5" />
              Language
            </div>
            <div>
              <Input
                type="text"
                name="language"
                value={formData.language}
                onChange={handleInputChange}
                placeholder="Select the language for proceedings"
                className="p-2"
              />
              <p className="text-sm text-gray-600 mb-4 mt-3">
                Is the language for the proceedings the one mentioned in the agreement?
              </p>
              <RadioGroup
                value={formData.isLanguageFromAgreement === null ? "" : formData.isLanguageFromAgreement ? "yes" : "no"}
                onValueChange={(value) => handleRadioChange("isLanguageFromAgreement", value)}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="yes-lang" />
                  <Label htmlFor="yes-lang">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no-lang" />
                  <Label htmlFor="no-lang">No</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
        <div className="h-px bg-gray-200 w-full my-8"></div>
        <div className="grid gap-10 md:grid-cols-3">
          {/* Statement Section */}
          <div className="space-y-4 ">
            <div className="flex items-center gap-2 text-blue-600 font-medium">
              <FileText className="w-5 h-5" />
              Statement
            </div>
            <div className="border-2 border-dashed rounded-lg p-6 text-center">
              <Textarea
                name="statement"
                value={formData.statement}
                onChange={handleInputChange}
                placeholder="Write your Statement Here"
                className="mb-4"
              />
              <div className="text-sm text-gray-500">or</div>
              <input
                type="file"
                ref={fileInputRefs.statement}
                onChange={(e) => handleFileUpload('statement', e.target.files?.[0] || null)}
                accept=".pdf"
                className="hidden"
              />
              <button
                onClick={() => triggerFileInput('statement')}
                className="flex items-center gap-2 text-blue-600 mx-auto mt-4"
              >
                <Upload className="w-4 h-4" />
                Upload a PDF
              </button>
              {files.statement && <p className="mt-2 text-sm text-gray-600">{files.statement.name}</p>}
            </div>
          </div>

          {/* Agreement under Disputes Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-blue-600 font-medium">
              <FileText className="w-5 h-5" />
              Agreement under Disputes
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="border-2 border-dashed rounded-lg p-6 text-center">
                <input
                  type="file"
                  ref={fileInputRefs.contract}
                  onChange={(e) => handleFileUpload('contract', e.target.files?.[0] || null)}
                  accept=".pdf"
                  className="hidden"
                />
                <button
                  onClick={() => triggerFileInput('contract')}
                  className="flex flex-col items-center gap-2 text-blue-600 mx-auto"
                >
                  <Upload className="w-6 h-6" />
                  <span>Upload the Contract</span>
                  <span className="text-xs text-gray-500">Max 25MB PDF</span>
                </button>
                {files.contract && <p className="mt-2 text-sm text-gray-600">{files.contract.name}</p>}
              </div>
              <div className="border-2 border-dashed rounded-lg p-6 text-center">
                <input
                  type="file"
                  ref={fileInputRefs.arbitrationAgreement}
                  onChange={(e) => handleFileUpload('arbitrationAgreement', e.target.files?.[0] || null)}
                  accept=".pdf"
                  className="hidden"
                />
                <button
                  onClick={() => triggerFileInput('arbitrationAgreement')}
                  className="flex flex-col items-center gap-2 text-blue-600 mx-auto"
                >
                  <Upload className="w-6 h-6" />
                  <span>Arbitration Agreement</span>
                  <span className="text-xs text-gray-500">Max 25MB PDF</span>
                </button>
                {files.arbitrationAgreement && <p className="mt-2 text-sm text-gray-600">{files.arbitrationAgreement.name}</p>}
              </div>
            </div>
          </div>

          {/* Additional Documentation Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-blue-600 font-medium">
                <FileText className="w-5 h-5" />
                Additional Documentation
              </div>
            </div>
            <div className="flex items-center justify-start gap-5"> 
              <div className="border-2 border-dashed rounded-lg p-6 text-center">
                <input
                  type="file"
                  ref={fileInputRefs.additionalDocument}
                  onChange={(e) => handleFileUpload('additionalDocument', e.target.files?.[0] || null)}
                  accept=".pdf"
                  className="hidden"
                />
                <button
                  onClick={() => triggerFileInput('additionalDocument')}
                  className="flex flex-col items-center gap-2 text-blue-600 mx-auto"
                >
                  <Upload className="w-6 h-6" />
                  <span>Upload the Contract</span>
                  <span className="text-xs text-gray-500">Max 25MB PDF</span>
                </button>
                {files.additionalDocument && <p className="mt-2 text-sm text-gray-600">{files.additionalDocument.name}</p>}
              </div>
              <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-full border-2 border-blue-600 ">
                <Plus className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

