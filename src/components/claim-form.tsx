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
    <div className="bg-white rounded-xl shadow-sm p-4 w-full max-h-screen overflow-auto">
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex flex-1 justify-start gap-2 items-baseline">
            <h2 className="text-lg sm:text-xl font-semibold">File your Claim.</h2>
            <p className="text-gray-500 text-xs sm:text-sm">(Approx 5 Minutes)</p>
          </div>
          <div className="h-px bg-gray-200 w-full"></div>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Claim Value Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
              <Calculator className="w-4 h-4" />
              Claim Value
            </div>
            <div className="space-y-3">
              <div>
                <Label className="text-xs sm:text-sm">Contract Value</Label>
                <div className="flex gap-2 mt-1">
                  <Input
                    type="number"
                    name="contractValue"
                    value={formData.contractValue}
                    onChange={handleInputChange}
                    placeholder="10,00.00"
                    className="flex-1 text-sm sm:text-base h-8 sm:h-10"
                  />
                  <select
                    name="currency"
                    value={formData.currency}
                    onChange={handleInputChange}
                    className="w-20 sm:w-24 rounded-md border border-input bg-background px-2 text-sm sm:text-base h-8 sm:h-10"
                  >
                    <option>USD</option>
                    <option>EUR</option>
                    <option>GBP</option>
                  </select>
                </div>
              </div>
              <div>
                <Label className="text-xs sm:text-sm">Claim Value</Label>
                <div className="flex gap-2 mt-1">
                  <Input
                    type="number"
                    name="claimValue"
                    value={formData.claimValue}
                    onChange={handleInputChange}
                    placeholder="15,00.00"
                    className="flex-1 text-sm sm:text-base h-8 sm:h-10"
                    readOnly
                  />
                  <select
                    name="currency"
                    value={formData.currency}
                    onChange={handleInputChange}
                    className="w-20 sm:w-24 rounded-md border border-input bg-background px-2 text-sm sm:text-base h-8 sm:h-10"
                  >
                    <option>USD</option>
                    <option>EUR</option>
                    <option>GBP</option>
                  </select>
                </div>
                <p className="text-orange-500 text-xs sm:text-sm mt-1">150% of Contract Value</p>
              </div>
            </div>
          </div>

          {/* Place Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
              <MapPin className="w-4 h-4" />
              Place
            </div>
            <div>
              <Input
                type="text"
                name="place"
                value={formData.place}
                onChange={handleInputChange}
                placeholder="Select the Place for proceedings"
                className="text-sm sm:text-base h-8 sm:h-10"
              />
              <p className="text-xs sm:text-sm text-gray-600 my-2">
                Is the place for the proceedings the one mentioned in the agreement?
              </p>
              <RadioGroup
                value={formData.isPlaceFromAgreement === null ? "" : formData.isPlaceFromAgreement ? "yes" : "no"}
                onValueChange={(value) => handleRadioChange("isPlaceFromAgreement", value)}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="yes-place" />
                  <Label htmlFor="yes-place" className="text-xs sm:text-sm">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no-place" />
                  <Label htmlFor="no-place" className="text-xs sm:text-sm">No</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          {/* Language Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
              <Languages className="w-4 h-4" />
              Language
            </div>
            <div>
              <Input
                type="text"
                name="language"
                value={formData.language}
                onChange={handleInputChange}
                placeholder="Select the language for proceedings"
                className="text-sm sm:text-base h-8 sm:h-10"
              />
              <p className="text-xs sm:text-sm text-gray-600 my-2">
                Is the language for the proceedings the one mentioned in the agreement?
              </p>
              <RadioGroup
                value={formData.isLanguageFromAgreement === null ? "" : formData.isLanguageFromAgreement ? "yes" : "no"}
                onValueChange={(value) => handleRadioChange("isLanguageFromAgreement", value)}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="yes-lang" />
                  <Label htmlFor="yes-lang" className="text-xs sm:text-sm">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no"id="no-lang" />
                  <Label htmlFor="no-lang" className="text-xs sm:text-sm">No</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
        <div className="h-px bg-gray-200 w-full my-6"></div>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Statement Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
              <FileText className="w-4 h-4" />
              Statement
            </div>
            <div className="border-2 border-dashed rounded-lg p-3 text-center h-[180px] sm:h-[200px] flex flex-col justify-between">
              <Textarea
                name="statement"
                value={formData.statement}
                onChange={handleInputChange}
                placeholder="Write your Statement Here"
                className="mb-2 h-[100px] sm:h-[120px] text-sm sm:text-base"
              />
              <div>
                <div className="text-xs sm:text-sm text-gray-500">or</div>
                <input
                  type="file"
                  ref={fileInputRefs.statement}
                  onChange={(e) => handleFileUpload('statement', e.target.files?.[0] || null)}
                  accept=".pdf"
                  className="hidden"
                />
                <button
                  onClick={() => triggerFileInput('statement')}
                  className="flex items-center gap-1 text-blue-600 mx-auto mt-2 text-xs sm:text-sm"
                >
                  <Upload className="w-3 h-3 sm:w-4 sm:h-4" />
                  Upload a PDF
                </button>
                {files.statement && <p className="mt-1 text-xs sm:text-sm text-gray-600">{files.statement.name}</p>}
              </div>
            </div>
          </div>

          {/* Agreement under Disputes Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
              <FileText className="w-4 h-4" />
              Agreement under Disputes
            </div>
            <div className="grid grid-cols-2 gap-2 h-[180px] sm:h-[200px]">
              <div className="border-2 border-dashed rounded-lg p-3 text-center flex flex-col justify-center">
                <input
                  type="file"
                  ref={fileInputRefs.contract}
                  onChange={(e) => handleFileUpload('contract', e.target.files?.[0] || null)}
                  accept=".pdf"
                  className="hidden"
                />
                <button
                  onClick={() => triggerFileInput('contract')}
                  className="flex flex-col items-center gap-1 text-blue-600 mx-auto"
                >
                  <Upload className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-xs sm:text-sm">Upload the Contract</span>
                  <span className="text-[10px] sm:text-xs text-gray-500">Max 25MB PDF</span>
                </button>
                {files.contract && <p className="mt-1 text-xs sm:text-sm text-gray-600">{files.contract.name}</p>}
              </div>
              <div className="border-2 border-dashed rounded-lg p-3 text-center flex flex-col justify-center">
                <input
                  type="file"
                  ref={fileInputRefs.arbitrationAgreement}
                  onChange={(e) => handleFileUpload('arbitrationAgreement', e.target.files?.[0] || null)}
                  accept=".pdf"
                  className="hidden"
                />
                <button
                  onClick={() => triggerFileInput('arbitrationAgreement')}
                  className="flex flex-col items-center gap-1 text-blue-600 mx-auto"
                >
                  <Upload className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-xs sm:text-sm">Arbitration Agreement</span>
                  <span className="text-[10px] sm:text-xs text-gray-500">Max 25MB PDF</span>
                </button>
                {files.arbitrationAgreement && <p className="mt-1 text-xs sm:text-sm text-gray-600">{files.arbitrationAgreement.name}</p>}
              </div>
            </div>
          </div>

          {/* Additional Documentation Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
                <FileText className="w-4 h-4" />
                Additional Documentation
              </div>
            </div>
            <div className="flex items-center justify-start gap-2 h-[180px] sm:h-[200px]"> 
              <div className="border-2 border-dashed rounded-lg p-3 text-center flex-grow flex flex-col justify-center h-full">
                <input
                  type="file"
                  ref={fileInputRefs.additionalDocument}
                  onChange={(e) => handleFileUpload('additionalDocument', e.target.files?.[0] || null)}
                  accept=".pdf"
                  className="hidden"
                />
                <button
                  onClick={() => triggerFileInput('additionalDocument')}
                  className="flex flex-col items-center gap-1 text-blue-600 mx-auto"
                >
                  <Upload className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-xs sm:text-sm">Upload the Contract</span>
                  <span className="text-[10px] sm:text-xs text-gray-500">Max 25MB PDF</span>
                </button>
                {files.additionalDocument && <p className="mt-1 text-xs sm:text-sm text-gray-600">{files.additionalDocument.name}</p>}
              </div>
              <button className="p-1 text-blue-600 hover:bg-blue-50 rounded-full border-2 border-blue-600 h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center">
                <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

