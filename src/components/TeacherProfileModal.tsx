import React, { useState, useEffect } from 'react';
import { UserCheck, BookOpen, School, X, Check, RotateCcw } from 'lucide-react';
import { TeacherProfile } from '../types';
import { DEFAULT_TEACHER_PROFILE } from '../services/storage';

interface TeacherProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentProfile?: TeacherProfile;
  onSave: (newProfile: TeacherProfile) => void;
}

export const TeacherProfileModal: React.FC<TeacherProfileModalProps> = ({
  isOpen,
  onClose,
  currentProfile,
  onSave,
}) => {
  const [name, setName] = useState(currentProfile?.name || DEFAULT_TEACHER_PROFILE.name);
  const [subject, setSubject] = useState(currentProfile?.subject || DEFAULT_TEACHER_PROFILE.subject);
  const [school, setSchool] = useState(currentProfile?.school || DEFAULT_TEACHER_PROFILE.school);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen) {
      setName(currentProfile?.name || DEFAULT_TEACHER_PROFILE.name);
      setSubject(currentProfile?.subject || DEFAULT_TEACHER_PROFILE.subject);
      setSchool(currentProfile?.school || DEFAULT_TEACHER_PROFILE.school);
      setError('');
    }
  }, [isOpen, currentProfile]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Vui lòng nhập họ và tên giáo viên');
      return;
    }
    if (!subject.trim()) {
      setError('Vui lòng nhập môn giảng dạy');
      return;
    }
    if (!school.trim()) {
      setError('Vui lòng nhập tên trường học');
      return;
    }

    onSave({
      name: name.trim(),
      subject: subject.trim(),
      school: school.trim(),
    });
    onClose();
  };

  const handleResetToDefault = () => {
    setName(DEFAULT_TEACHER_PROFILE.name);
    setSubject(DEFAULT_TEACHER_PROFILE.subject);
    setSchool(DEFAULT_TEACHER_PROFILE.school);
    setError('');
  };

  return (
    <div
      id="teacher-profile-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in"
      onClick={onClose}
    >
      <div
        id="teacher-profile-modal-card"
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">Thông tin Giáo viên & Trường học</h3>
              <p className="text-xs text-slate-500">Tùy chỉnh thông tin hiển thị trên giao diện hệ thống</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700 font-medium">
              {error}
            </div>
          )}

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Họ tên & Xưng hô giáo viên <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <UserCheck className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="VD: Thầy NGUYỄN THANH TÙNG"
                className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 focus:bg-white transition-all"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Môn giảng dạy <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <BookOpen className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="VD: Tin học"
                className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 focus:bg-white transition-all"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Trường học / Đơn vị công tác <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <School className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={school}
                onChange={(e) => setSchool(e.target.value)}
                placeholder="VD: THCS LOL37 Nghệ An"
                className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 focus:bg-white transition-all"
                required
              />
            </div>
          </div>

          {/* Preview Box */}
          <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
              Xem trước hiển thị giao diện:
            </span>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
              <span className="text-blue-700 font-bold">{name || 'Thầy NGUYỄN THANH TÙNG'}</span>
              <span className="text-slate-300">|</span>
              <span>{subject || 'Tin học'}</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-600">{school || 'THCS LOL37 Nghệ An'}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              onClick={handleResetToDefault}
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Khôi phục mặc định</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
              >
                Hủy
              </button>
              <button
                type="submit"
                className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-xs shadow-blue-500/20 transition-all active:scale-95"
              >
                <Check className="w-4 h-4" />
                <span>Lưu thông tin</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
